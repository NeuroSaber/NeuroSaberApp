import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {ResetPassword} from '../reset-password/reset-password';
import {Signup} from '../signup/signup';
import { Tabs } from '../tabs/tabs';



import { EmailValidator } from '../../validators/email';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  public loginForm: any;
  public loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public authData: AuthData, 
    public formBuilder: FormBuilder, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController ) {

    this.loginForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
          });

  }

  loginUser(){
      if (!this.loginForm.valid){
        console.log(this.loginForm.value);
      } else {
        this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then( authData => {
          this.navCtrl.setRoot(Tabs);
        }, error => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: "Usuário não cadastrado ou a senha informada está incorreta.",
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
    console.log('ionViewDidLoad Login');
  }


  goToResetPassword(){
    this.navCtrl.push(ResetPassword);
  }

  goToSignup(){
    this.navCtrl.push(Signup);
  }
  



}
