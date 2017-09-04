import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Free } from '../free/free';
import { Insp} from '../insp/insp';
import { Post } from '../post/post';
import { Ofertas } from '../ofertas/ofertas';
import { Login } from '../login/login';
import { AboutPage } from '../about/about';


import { AngularFire } from 'angularfire2';


import { AuthData } from '../../providers/auth-data';
import { Platform } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {InAppBrowser} from 'ionic-native';
import {App} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';





/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {



  public loading: any;
  constructor(private app: App, public authData: AuthData, platform: Platform, af: AngularFire, public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation, public popoverCtrl: PopoverController, public modalCtrl: ModalController) {


  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad Tabs');

  }


  goToFree(){
    this.navCtrl.push(Free);
  }

 goToInsp(){
    this.navCtrl.push(Insp);
  }

  goToPost(){
    this.navCtrl.push(Post);
  }

  goToOfertas(){
    this.navCtrl.push(Ofertas);
  }






  goToLogout(){
    this.authData.logoutUser();
    this.app.getRootNav().setRoot(Login);


  }

  goToExt(){

    var ref = window.open('https://neurosaber.com.br/', '_system', 'location=yes');
  }


  lockscreen(){
   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

   presentModal() {
    let modal = this.modalCtrl.create(AboutPage);
    modal.present();
  }
  
  

}
