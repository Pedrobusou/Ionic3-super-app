import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//PAGES
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
import { MapsPage } from '../pages/maps/maps';
import { TtsPage } from '../pages/tts/tts';
import { CalculatorPage } from '../pages/calculator/calculator';
import { SttPage } from '../pages/stt/stt';
import { FlashlightPage } from '../pages/flashlight/flashlight';
import { ScannerPage } from '../pages/scanner/scanner';
import { YoutubePage } from '../pages/youtube/youtube';
import { CallPage } from '../pages/call/call';

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

import { Youtube } from '../pipes/youtube';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    MapsPage,
    TtsPage,
    SttPage,
    CalculatorPage,
    FlashlightPage,
    ScannerPage,
    YoutubePage,
    Youtube,
    CallPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    MapsPage,
    TtsPage,
    SttPage,
    CalculatorPage,
    FlashlightPage,
    ScannerPage,
    YoutubePage,
    CallPage
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
    CallNumber
  ]
})
export class AppModule { }