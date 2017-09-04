import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';
/*
  Generated class for the PremiumAuth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PremiumAuth {

  fireAuth: any;

  constructor(public af: AngularFire) {
    af.auth.subscribe( user => {
      if (user) { this.fireAuth = user.auth; }
    });
  }


  
 

// cria usuário como free no banco de dados, incluindo email e uid
  userFree() {
   

var user = firebase.auth().currentUser;
var email, uid;

// recebe informações do usuário
if (user != null) {
  
  email = user.email;
  uid = user.uid; 
}

var firebasenew = firebase.database().ref();
  
  
  var premium = "nao";
  
  
  //adiciona informação de compra no uid
  firebasenew.child('users/'+ uid + '/premium').set(premium);
  // adiciona informação de email
    firebasenew.child('users/'+ uid + '/email').set(email);



     
  



  }




}
