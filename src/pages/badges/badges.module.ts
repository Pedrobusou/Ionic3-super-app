import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Badges } from './badges';

@NgModule({
  declarations: [
    Badges,
  ],
  imports: [
    IonicPageModule.forChild(Badges),
  ],
  exports: [
    Badges
  ]
})
export class BadgesModule {}
