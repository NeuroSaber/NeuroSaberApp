import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFire } from 'angularfire2';



import { Tabs } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { Signup } from '../pages/signup/signup';
import { Free } from '../pages/free/free';
import { Insp } from '../pages/insp/insp';
import { Post } from '../pages/post/post';
import { Ofertas } from '../pages/ofertas/ofertas';
import { Config } from '../pages/config/config';
import { Post1Page } from '../pages/post1/post1';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform,  af: AngularFire, statusBar: StatusBar,private splashScreen: SplashScreen) {

  const authObserver = af.auth.subscribe( user => {
      if (user) {
        this.rootPage = Tabs;
        authObserver.unsubscribe();
      } else {
        this.rootPage = Tabs;
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
    });
  }
}
