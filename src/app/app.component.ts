import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
import { MapsPage } from '../pages/maps/maps';
import { TtsPage } from '../pages/tts/tts';
import { SttPage } from '../pages/stt/stt';
import { CalculatorPage } from '../pages/calculator/calculator';
import { FlashlightPage } from '../pages/flashlight/flashlight';
import { ScannerPage } from '../pages/scanner/scanner';
import { YoutubePage } from '../pages/youtube/youtube';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'List', component: ListPage, icon: "list" },
      { title: 'Camera', component: CameraPage, icon: "camera" },
      { title: 'Maps', component: MapsPage, icon: "pin" },
      { title: 'Text To Speech', component: TtsPage, icon: "text" },
      { title: 'Speech To Text', component: SttPage, icon: "mic" },
      { title: 'Calculator', component: CalculatorPage, icon: "calculator" },
      { title: 'Flashlight', component: FlashlightPage, icon: "flash" },
      { title: 'Scanner', component: ScannerPage, icon: "qr-scanner" },
      { title: 'Youtube', component: YoutubePage, icon: "logo-youtube" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}