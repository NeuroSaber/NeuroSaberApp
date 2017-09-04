import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';
import { EmailValidator } from '../../validators/email';


import { Tabs } from '../tabs/tabs';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
	public signupForm;
	loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: NavController, public authData: AuthData, 
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController) {

		this.signupForm = formBuilder.group({
		      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
		      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
		    });

  }

 /**
   * If the form is valid it will call the AuthData service to sign the user up password displaying a loading
   *  component while the user waits.
   *
   * If the form is invalid it will just log the form value, feel free to handle that as you like.
   */


signupUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password)
      .then(() => {


          //após criar o usuário no Auth, cria o Banco de Dados para o UID

          var user = firebase.auth().currentUser;
          var email, uid;

          // recebe informações do usuário
          if (user != null) {
  
          email = user.email;
          uid = user.uid; 
          }

          var firebasenew = firebase.database().ref();
  

          // adiciona informação de email
          firebasenew.child('users/'+ uid + '/email').set(email);














       //direciona para a página Tabs

        this.nav.setRoot(Tabs);
      }, (error) => {
        this.loading.dismiss().then( () => {
          var errorMessage: string = error.message;
            let alert = this.alertCtrl.create({
              message: errorMessage,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }



  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

 goToTabs(){
  	this.navCtrl.push(Tabs);
  }



}
