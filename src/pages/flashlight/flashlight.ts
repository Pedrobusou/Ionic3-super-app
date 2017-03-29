import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html'
})

export class FlashlightPage {
  isOn: boolean = false;
  constructor(
    private flashlight: Flashlight,
    public navCtrl: NavController,
    public navParams: NavParams) { }

  async isAvailable(): Promise<boolean> {
    try {
      let available = await this.flashlight.available();
      return available;
    } catch (e) {
      console.log(e);
    }
  }

  async toogleFlash(): Promise<void> {
    try {
      let available = await this.isAvailable();
      if (available) {
        await this.flashlight.toggle();
        this.isOn = !this.isOn;
      }
    } catch (e) {
      console.log(e);
    }
  }
}