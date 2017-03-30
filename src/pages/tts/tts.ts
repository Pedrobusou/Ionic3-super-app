import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-tts',
  templateUrl: 'tts.html'
})

export class TtsPage {
  text: string;

  constructor(private tts: TextToSpeech) { }

  async sayText(): Promise<any> {
    try {
      await this.tts.speak(this.text);
      console.log('Succesfully spoked');
    } catch (e) {
      console.log(e);
    }
  }
}