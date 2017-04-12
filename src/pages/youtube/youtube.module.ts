import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Youtube } from './youtube';

@NgModule({
  declarations: [
    Youtube,
  ],
  imports: [
    IonicPageModule.forChild(Youtube),
  ],
  exports: [
    Youtube
  ]
})
export class YoutubeModule {}
