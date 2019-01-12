import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static userDetails: firebase.User = null;

  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
   this.user = _firebaseAuth.authState;

      this.user.subscribe(
        (user) => {
          if (user) {
            AuthService.userDetails = user;
          } else {
            AuthService.userDetails = null;
          }
        }
      );
   }

   signInRegular(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUpRegular(name, email, password) {
    return new Promise<any>((resolve, reject) => {
      this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
       return AuthService.userDetails.updateProfile({displayName: name, photoURL: ''});
        resolve(res);
      }, err => reject(err));
    });
  }

  isLoggedIn() {
    if (AuthService.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
}
