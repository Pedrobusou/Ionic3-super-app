import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Scanner } from './scanner';

@NgModule({
  declarations: [
    Scanner,
  ],
  imports: [
    IonicPageModule.forChild(Scanner),
  ],
  exports: [
    Scanner
  ]
})
export class ScannerModule {}
