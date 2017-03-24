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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//UTILITIES (Maps, Camera, TTS)
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Camera } from '@ionic-native/camera';
import { CameraMock } from './camera.mock'
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,
    MapsPage,
    TtsPage,
    SttPage,
    CalculatorPage
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
    CalculatorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Camera, useClass: CameraMock }, //use only Camera for phones
    TextToSpeech,
    SpeechRecognition
  ]
})
export class AppModule { }
