import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Firebase } from '@ionic-native/firebase';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { HomePage } from '../pages/home/home';
import { FirebaseSonglistPage } from '../pages/firebaseSonglist/firebaseSonglist';
import { CameraPage } from '../pages/camera/camera';
import { MapsPage } from '../pages/maps/maps';
import { TtsPage } from '../pages/tts/tts';
import { SttPage } from '../pages/stt/stt';
import { CalculatorPage } from '../pages/calculator/calculator';
import { ScannerPage } from '../pages/scanner/scanner';
import { YoutubePage } from '../pages/youtube/youtube';
import { CallPage } from '../pages/call/call';
import { BadgesPage } from '../pages/badges/badges';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, icon: string }>;
  activePage;

  constructor(
    private ga: GoogleAnalytics,
    private firebase: Firebase,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Firebase Songlist', component: FirebaseSonglistPage, icon: "list" },
      { title: 'Camera', component: CameraPage, icon: "camera" },
      { title: 'Maps', component: MapsPage, icon: "pin" },
      { title: 'Text To Speech', component: TtsPage, icon: "text" },
      { title: 'Speech To Text', component: SttPage, icon: "mic" },
      { title: 'Calculator', component: CalculatorPage, icon: "calculator" },
      { title: 'Scanner', component: ScannerPage, icon: "qr-scanner" },
      { title: 'Youtube', component: YoutubePage, icon: "logo-youtube" },
      { title: 'Call', component: CallPage, icon: "call" },
      { title: 'Badges', component: BadgesPage, icon: "notifications" }
    ];
    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //FIREBASE
      //UNCOMENT TO TEST IN REAL DEVICE. COMMENT TO TEST IN BROWSER
      this.firebase.getToken()
        .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
        .catch(error => console.error('Error getting token', error));

      this.firebase.onTokenRefresh()
        .subscribe((token: string) => console.log(`Got a new token ${token}`));

      //GOOGLE ANALYTICS
      this.ga.startTrackerWithId("UA-96946492-3")
        .then(() => {
          console.log('Google analytics is ready now');
          return this.ga.enableUncaughtExceptionReporting(true)
        }).then((_success) => {
          console.log("startTrackerWithId success")
        }).catch((_error) => {
          console.log("enableUncaughtExceptionReporting", _error)
        })
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page) {
    return page == this.activePage;
  }
}