import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router) { }


    login(email: string, password: string) {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
    }

    emailSignup(email: string, password: string) {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
       console.log('Sucess', value);
       this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
    }

    googleLogin() {
      const provider = new GoogleAuthProvider();
      return this.oAuthLogin(provider)
        .then((value: any) => {
       console.log('Sucess', value),
       this.router.navigateByUrl('/home');
     })
      .catch((error: any) => {
        console.log('Something went wrong: ', error);
      });
    }

    logout() {
      this.afAuth.signOut().then(() => {
        this.router.navigate(['/login']);
      });
    }

    private oAuthLogin(provider: GoogleAuthProvider) {
      return this.afAuth.signInWithPopup(provider);
    }
}
