import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Maps } from './maps';

@NgModule({
  declarations: [
    Maps,
  ],
  imports: [
    IonicPageModule.forChild(Maps),
  ],
  exports: [
    Maps
  ]
})
export class MapsModule {}
