import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
declare var gapi: any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  private isAuthenticated = false;
  href;
  buttonDisabled = false;
  emailconnection: string;
  authChange = new Subject<boolean>();

  sc = ['https://www.googleapis.com/auth/gmail.send', 'https://www.googleapis.com/auth/gmail.compose'];
  constructor(public afAuth: AngularFireAuth, private router: Router, private snackBar: MatSnackBar) {

    this.initClient();
  }
  initClient() {
    gapi.load('client', () => {
      console.log('loaded client');


      gapi.client.init(
        {
          apiKey: 'AIzaSy************************************',
          clientId: '410928028782********************************************************',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
          scope: 'https://www.googleapis.com/auth/gmail.send'
        });
      gapi.client.load('gmail', 'v1', () => console.log('loaded gmail'));
    });
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {

        this.isAuthenticated = true;
        this.authChange.next(true);
        if (this.router.url === '') {
          this.router.navigate(['/send']);
        }
      } else {
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['']);
      }
    });
  }


  async login() {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).id_token;
    console.log(googleAuth);
    const credential = auth.GoogleAuthProvider.credential(token);
    await this.afAuth.auth.signInWithCredential(credential)
      .then(result => {
        this.router.navigate(['/send']);
        console.log('Success');

      })
      .catch(error => {
        console.log('error');
      });

  }
  logut() {
    this.afAuth.auth.signOut();
  }
  send() {
    this.buttonDisabled = true;
    this.emailconnection = this.afAuth.auth.currentUser.email;
    this.getUrl();
    const message =
      'Content-Type: text/html; charset="UTF-8"\r\n' +
      'From: abc@gmail.com\r\n' +
      'To: ' + this.emailconnection + '\r\n' +
      'Subject: A new issue has been logged in\r\n\r\n' +
      + '<a href=\'' + this.href + '\'>Click</a>' + '\r\n\r\n' + 'to view the issue ';
    const encodedMessage = btoa(message);
    const reallyEncodedMessage = encodedMessage.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const mail = reallyEncodedMessage;
    const request = gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: mail
      }
    });
    // tslint:disable-next-line: only-arrow-functions
    request.execute((response) => {
      console.log(response);
    });
    this.buttonDisabled = false;
    this.snackBar.open('Issue has been registered', '', {
      duration: 3000,
    });
  }

  getUrl() {
    this.href = 'http://localhost:4200/' + this.router.url;
  }




}
