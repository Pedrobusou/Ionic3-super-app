import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})

export class CalculatorPage {
  screen: string = "";

  constructor(private toastCtrl: ToastController) { }

  write(element: string) {
    this.screen += element;
  }

  backSpace() {
    this.screen = this.screen.substring(0, this.screen.length - 1);
  }

  getResult() {
    try {
      this.screen = eval(this.screen);
    } catch (e) {
      this.presentToast(e);
    }
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}