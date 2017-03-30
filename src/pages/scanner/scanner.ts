import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})

export class ScannerPage {
  options: BarcodeScannerOptions;
  results;

  constructor(private barcode: BarcodeScanner) { }

  async scanBarcode() {
    this.options = {
      prompt: "Scan a barcode or a QR"
    }

    try {
      this.results = await this.barcode.scan(this.options);
      console.log(this.results);
    } catch (e) {
      console.error(e);
    }
  }

  async encodeData() {
    try {
      const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, "https://github.com/pedrobusou");
    } catch (e) {
      console.error(e);
    }
  }
}