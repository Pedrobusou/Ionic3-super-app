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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, name: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, name: "home" },
      { title: 'List', component: ListPage, name: "list" },
      { title: 'Camera', component: CameraPage, name: "camera" },
      { title: 'Maps', component: MapsPage, name: "pin" },
      { title: 'Text To Speech', component: TtsPage, name: "text" },
      { title: 'Speech To Text', component: SttPage, name: "mic" },
      { title: 'Calculator', component: CalculatorPage, name: "calculator" }
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
