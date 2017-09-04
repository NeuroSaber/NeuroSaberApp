import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';





/**
 * Generated class for the Post page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class Post {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, public platform: Platform ) {
  }

launch(url){


  const browser = this.iab.create(url, '_system', 'location=yes');
  browser.show()
  }

  goToExt(){

    var ref = window.open('https://neurosaber.com.br/artigos', '_system', 'location=yes');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Post');
  }


}
