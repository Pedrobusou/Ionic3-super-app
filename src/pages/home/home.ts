import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { Platform } from 'ionic-angular';

import { Firebase } from '@ionic-native/firebase';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    private platform: Platform,
    private ga: GoogleAnalytics,
    private firebase: Firebase,
    private flashlight: Flashlight) {
    this.firebase.logEvent("MyCustomEvent", { greeting: "Hello!" });
    this.firebase.setScreenName("My Home Page");

    this.platform.ready().then(() => {
      ga.trackView("My Home Page");
    });
  }

  async isAvailable(): Promise<boolean> {
    try {
      let available = await this.flashlight.available();
      return available;
    } catch (e) {
      console.error(e);
    }
  }

  async toogleFlash(): Promise<void> {
    try {
      let available = await this.isAvailable();
      if (available)
        await this.flashlight.toggle();
    } catch (e) {
      console.error(e);
    }
  }
}