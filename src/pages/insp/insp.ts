import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the Insp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-insp',
  templateUrl: 'insp.html',
})
export class Insp {

/*  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Insp');
  }*/

  videoUrl1: SafeResourceUrl;
  videoUrl2: SafeResourceUrl;
  videoUrl3: SafeResourceUrl;
  videoUrl4: SafeResourceUrl;
  videoUrl5: SafeResourceUrl;
  videoUrl6: SafeResourceUrl;
  videoUrl7: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController) {
    this.videoUrl1 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/mYg1e_Ek6qI?controls=0')
    this.videoUrl2 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/nDOy5xqh7lU?controls=0')
    this.videoUrl3 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Z_xZa5u4sBE?controls=0')
    this.videoUrl4 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/FXeaeS7qutw?controls=0')
    this.videoUrl5 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4XweiwIncuU?controls=0')
    this.videoUrl6 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/RUTerg2SU7M?controls=0')
    this.videoUrl7 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/F_VzwfQFj2A?controls=0')

  }
/*goToVid1(){
  var ref = window.open('https://www.youtube.com/watch?v=mYg1e_Ek6qI&list=PLt0mObwmYzvR1RKC8z6pzebmXm1Kcre4R&index=12', '_system', 'location=yes');
  }

  goToVid2(){
  var ref = window.open('https://www.youtube.com/watch?v=nDOy5xqh7lU&index=16&list=PLt0mObwmYzvR1RKC8z6pzebmXm1Kcre4R', '_system', 'location=yes');
  }

  goToVid3(){
  var ref = window.open('https://www.youtube.com/watch?v=Z_xZa5u4sBE&index=20&list=PLt0mObwmYzvR1RKC8z6pzebmXm1Kcre4R', '_system', 'location=yes');
  }

  goToVid4(){
  var ref = window.open('https://www.youtube.com/watch?v=FXeaeS7qutw&list=PLt0mObwmYzvR1RKC8z6pzebmXm1Kcre4R&index', '_system', 'location=yes');
  }

  goToVid5(){
  var ref = window.open('https://www.youtube.com/watch?v=4XweiwIncuU&list=PLt0mObwmYzvR1RKC8z6pzebmXm1Kcre4R&index', '_system', 'location=yes');
  }

  goToVid6(){
  var ref = window.open('https://www.youtube.com/watch?v=RUTerg2SU7M&index=32&list=PLt0mObwmYzvR1RKC8z6pzebmXm1Kcre4R', '_system', 'location=yes');
  }

  goToVid7(){
  var ref = window.open('https://www.youtube.com/watch?v=F_VzwfQFj2A', '_system', 'location=yes');
  }
*/
}
