import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const firebaseConfig = {
  apiKey: 'AIzaSy*******************************',
  authDomain: 'sixth-aloe-258809.***************',
  databaseURL: 'https://si***********************',
  projectId: 'sixth-aloe-****',
  storageBucket: 'sixth-aloe*************************',
  messagingSenderId: '4109***********',
  appId: '1:410928028782:we**************************',
  measurementId: 'G-GZ2CY***********'
};
const material = [
  MatSnackBarModule
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MatSnackBarModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
