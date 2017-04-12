import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Youtube } from './youtube';
import { YoutubePipe } from '../../pipes/youtube';

@NgModule({
  declarations: [
    Youtube,
    YoutubePipe
  ],
  imports: [
    IonicPageModule.forChild(Youtube),
  ],
  exports: [
    Youtube
  ]
})
export class YoutubeModule { }
