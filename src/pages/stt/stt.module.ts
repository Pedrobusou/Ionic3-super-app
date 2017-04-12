import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Stt } from './stt';

@NgModule({
  declarations: [
    Stt,
  ],
  imports: [
    IonicPageModule.forChild(Stt),
  ],
  exports: [
    Stt
  ]
})
export class SttModule {}
