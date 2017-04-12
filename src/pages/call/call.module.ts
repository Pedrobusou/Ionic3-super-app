import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Call } from './call';

@NgModule({
  declarations: [
    Call,
  ],
  imports: [
    IonicPageModule.forChild(Call),
  ],
  exports: [
    Call
  ]
})
export class CallModule {}
