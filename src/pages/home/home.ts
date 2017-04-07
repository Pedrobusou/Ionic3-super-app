import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(private firebase: Firebase, private flashlight: Flashlight) {
    this.firebase.getToken()
      .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));

    this.firebase.onTokenRefresh()
      .subscribe((token: string) => console.log(`Got a new token ${token}`));
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