import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Firebase } from '@ionic-native/firebase';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: string = "Home";
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
      { title: 'Home', component: "Home", icon: "home" },
      { title: 'Firebase Songlist', component: "FirebaseSonglist", icon: "list" },
      { title: 'Camera', component: "PhoneCamera", icon: "camera" },
      { title: 'Maps', component: "Maps", icon: "pin" },
      { title: 'Text To Speech', component: "Tts", icon: "text" },
      { title: 'Speech To Text', component: "Stt", icon: "mic" },
      { title: 'Calculator', component: "Calculator", icon: "calculator" },
      { title: 'Scanner', component: "Scanner", icon: "qr-scanner" },
      { title: 'Youtube', component: "Youtube", icon: "logo-youtube" },
      { title: 'Call', component: "Call", icon: "call" },
      { title: 'Badges', component: "Badges", icon: "notifications" }
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