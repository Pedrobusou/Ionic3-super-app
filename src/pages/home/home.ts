import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  isOn: boolean = true;

  constructor(private flashlight: Flashlight) { }

  async isAvailable(): Promise<boolean> {
    try {
      let available = await this.flashlight.available();
      return available;
    } catch (e) {
      console.error(e);
    }
  }

  async toogleFlash(): Promise<void> {
    console.log(this.isOn);
    try {
      let available = await this.isAvailable();
      if (available)
        await this.flashlight.toggle();
    } catch (e) {
      console.error(e);
    }
  }
}