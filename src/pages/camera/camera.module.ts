import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneCamera } from './camera';

@NgModule({
  declarations: [
    PhoneCamera,
  ],
  imports: [
    IonicPageModule.forChild(PhoneCamera),
  ],
  exports: [
    PhoneCamera
  ]
})
export class CameraModule { }
