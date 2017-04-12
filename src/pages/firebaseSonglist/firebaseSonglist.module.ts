import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseSonglist } from './firebaseSonglist';

@NgModule({
  declarations: [
    FirebaseSonglist,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseSonglist),
  ],
  exports: [
    FirebaseSonglist
  ]
})
export class FirebaseSonglistModule {}
