import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tts } from './tts';

@NgModule({
  declarations: [
    Tts,
  ],
  imports: [
    IonicPageModule.forChild(Tts),
  ],
  exports: [
    Tts
  ]
})
export class TtsModule { }
