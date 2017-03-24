import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-tts',
  templateUrl: 'tts.html'
})
export class TtsPage {
  text: string;

  constructor(private tts: TextToSpeech, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoquendoPage');
  }

  async sayText(): Promise<any> {
    try {
      await this.tts.speak(this.text);
      console.log('Succesfully spoked');
    } catch (e) {
      console.log(e);
    }
  }
}
