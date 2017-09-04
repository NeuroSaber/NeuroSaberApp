import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the Free page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-free',
  templateUrl: 'free.html',
})
export class Free {
/*
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Free');
  }
*/
  videoUrl1: SafeResourceUrl;
  videoUrl2: SafeResourceUrl;
  videoUrl3: SafeResourceUrl;
  videoUrl4: SafeResourceUrl;
  videoUrl5: SafeResourceUrl;
  videoUrl6: SafeResourceUrl;
  videoUrl7: SafeResourceUrl;
  videoUrl8: SafeResourceUrl;
  videoUrl9: SafeResourceUrl;
  videoUrl10: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController) {
    this.videoUrl1 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/gaUvhyNr7g4')
    this.videoUrl2 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tc1BDfI7jKU')
    this.videoUrl3 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/G8eqFwVO1Rk')
    this.videoUrl4 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pQj5exw5KvA')
    this.videoUrl5 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/toSveL3JpAQ')
    this.videoUrl6 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/B_zTflUMihM')
    this.videoUrl7 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8lHS3Gv-HXE')
    this.videoUrl8 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/VzAlj6DPhGg')
    this.videoUrl9 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/t_vFEv_yBcc')
    this.videoUrl10 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6BdRrepK_IA')

  }
  /*
  goToVid1(){
  var ref = window.open('https://www.youtube.com/watch?v=gaUvhyNr7g4', '_system', 'location=yes');
  }

  goToVid2(){
  var ref = window.open('https://www.youtube.com/watch?v=tc1BDfI7jKU&t', '_system', 'location=yes');
  }

  goToVid3(){
  var ref = window.open('https://www.youtube.com/watch?v=G8eqFwVO1Rk&t', '_system', 'location=yes');
  }

  goToVid4(){
  var ref = window.open('https://www.youtube.com/watch?v=pQj5exw5KvA&t', '_system', 'location=yes');
  }

  goToVid5(){
  var ref = window.open('https://www.youtube.com/watch?v=toSveL3JpAQ&t', '_system', 'location=yes');
  }

  goToVid6(){
  var ref = window.open('https://www.youtube.com/watch?v=B_zTflUMihM&t', '_system', 'location=yes');
  }

  goToVid7(){
  var ref = window.open('https://www.youtube.com/watch?v=8lHS3Gv-HXE&t', '_system', 'location=yes');
  }

  goToVid8(){
  var ref = window.open('https://www.youtube.com/watch?v=VzAlj6DPhGg', '_system', 'location=yes');
  }

  goToVid9(){
  var ref = window.open('https://www.youtube.com/watch?v=t_vFEv_yBcc&t', '_system', 'location=yes');
  }

  goToVid10(){
  var ref = window.open('https://www.youtube.com/watch?v=6BdRrepK_IA&t', '_system', 'location=yes');
  }
*/

goToExt(){

  var ref = window.open('https://www.youtube.com/channel/UCghJZXv-Cg90zgdeTZCt_-A', '_system', 'location=yes');
}

}
