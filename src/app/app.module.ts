import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//UTILITIES
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Camera } from '@ionic-native/camera';
//import { CameraMock } from './camera.mock'
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Flashlight } from '@ionic-native/flashlight';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CallNumber } from '@ionic-native/call-number';
import { Badge } from '@ionic-native/badge';

import { Firebase } from '@ionic-native/firebase';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { Youtube } from '../pipes/youtube';

import { AngularFireModule } from 'angularfire2';
var firebaseConfig = {
  apiKey: "AIzaSyB1-iDN3gGZ9DVtELxav8gXG0KeLRTaAa8", //AIzaSyDMKg4Xk_1GvbZUtExKbOvv17tQlCCsq30
  authDomain: "fir-test-de004.firebaseapp.com",
  databaseURL: "https://fir-test-de004.firebaseio.com",
  projectId: "fir-test-de004",
  storageBucket: "fir-test-de004.appspot.com",
  messagingSenderId: "991744973627"
};

@NgModule({
  declarations: [
    MyApp,
    Youtube
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera, //use only <Camera> for phones. <{ provide: Camera, useClass: CameraMock }> for browser
    TextToSpeech,
    SpeechRecognition,
    Flashlight,
    BarcodeScanner,
    CallNumber,
    Badge,
    Firebase,
    GoogleAnalytics
  ]
})
export class AppModule { }