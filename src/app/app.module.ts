import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthData } from '../providers/auth-data';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyACxmUGZCn7wy-Dg-Ov-EArIHzsOE2heyI",
    authDomain: "neurosaber-app.firebaseapp.com",
    databaseURL: "https://neurosaber-app.firebaseio.com",
    projectId: "neurosaber-app",
    storageBucket: "neurosaber-app.appspot.com",
    messagingSenderId: "880114076004"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
//paginas
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
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





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Tabs,
    Login,
    ResetPassword,
    Signup,
    Free,
    Insp,
    Post,
    Ofertas,
    Config,
    Post1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
    backButtonText: '',
    backButtonIcon: "arrow-back",
    backButtonColor: "#1abc9c",
    }),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Tabs,
    Login,
    ResetPassword,
    Signup,
    Free,
    Insp,
    Post,
    Ofertas,
    Config,
    Post1Page
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    InAppBrowser,
    ScreenOrientation
  ]
})
export class AppModule {}
