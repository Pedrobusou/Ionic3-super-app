import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})

export class ScannerPage {
  options: BarcodeScannerOptions;
  results;

  constructor(
    private barcode: BarcodeScanner,
    public navCtrl: NavController,
    public navParams: NavParams) { }

  async scanBarcode() {
    this.options = {
      prompt: "Scan a barcode or a QR"
    }

    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
  }

  async encodeData() {
    const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, "https://github.com/pedrobusou");
  }
}