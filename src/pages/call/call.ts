import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-call',
  templateUrl: 'call.html'
})

export class CallPage {
  phoneNumber: number;

  constructor(private call: CallNumber) { }

  async callNumber(): Promise<any> {
    try {
      await this.call.callNumber(String(this.phoneNumber), true);
    } catch (e) {
      console.error(e);
    }
  }
}