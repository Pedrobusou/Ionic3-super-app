import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-stt',
  templateUrl: 'stt.html'
})
export class SttPage {
  speechList: Array<string> = [];
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;

  constructor(private platform: Platform, private speech: SpeechRecognition, public navCtrl: NavController, public navParams: NavParams) { }

  listenForSpeech(): void {
    this.androidOptions = {
      prompt: 'Speak into your phone (android)!'
    }

    this.androidOptions = {
      prompt: 'Speak into your phone (ios)!'
    }

    if (this.platform.is('android'))
      this.speech.startListening(this.androidOptions).subscribe(data => this.speechList = data, error => console.log(error));
    else if (this.platform.is('ios'))
      this.speech.startListening(this.iosOptions).subscribe(data => this.speechList = data, error => console.log(error));
    else
      this.speech.startListening().subscribe(data => this.speechList = data, error => console.log(error));
  }

//Move to constructor and delete "hasPermission"
  async getPermission(): Promise<void> {
    try {
      const permission = await this.speech.requestPermission();
      console.log(permission);
      return permission;
    } catch (e) {
      console.error(e);
    }
  }

  async hasPermission(): Promise<boolean> {
    try {
      const permission = await this.speech.hasPermission();
      console.log(permission);
      return permission;
    } catch (e) {
      console.error(e);
    }
  }

  async getSupportedLanguages(): Promise<Array<string>> {
    try {
      const languages = await this.speech.getSupportedLanguages();
      console.log(languages);
      return languages;
    } catch (e) {
      console.error(e);
    }
  }

  async isSpeechSuported(): Promise<boolean> {
    try {
      const isAvailable = await this.speech.isRecognitionAvailable();
      console.log(isAvailable);
      return isAvailable;
    } catch (e) {
      console.error(e);
    }
  }
}
