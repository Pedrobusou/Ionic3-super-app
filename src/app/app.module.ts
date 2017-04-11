import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//PAGES
import { HomePage } from '../pages/home/home';
import { FirebaseSonglistPage } from '../pages/firebaseSonglist/firebaseSonglist';
import { CameraPage } from '../pages/camera/camera';
import { MapsPage } from '../pages/maps/maps';
import { TtsPage } from '../pages/tts/tts';
import { CalculatorPage } from '../pages/calculator/calculator';
import { SttPage } from '../pages/stt/stt';
import { ScannerPage } from '../pages/scanner/scanner';
import { YoutubePage } from '../pages/youtube/youtube';
import { CallPage } from '../pages/call/call';
import { BadgesPage } from '../pages/badges/badges';

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
    HomePage,
    FirebaseSonglistPage,
    CameraPage,
    MapsPage,
    TtsPage,
    SttPage,
    CalculatorPage,
    ScannerPage,
    YoutubePage,
    Youtube,
    CallPage,
    BadgesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirebaseSonglistPage,
    CameraPage,
    MapsPage,
    TtsPage,
    SttPage,
    CalculatorPage,
    ScannerPage,
    YoutubePage,
    CallPage,
    BadgesPage
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