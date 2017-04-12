import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Maps } from './maps';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    Maps,
  ],
  imports: [
    IonicPageModule.forChild(Maps),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjLXZvXwgHzxiWEz9DtqgDX6yD8sWsnqY'
    })
  ],
  exports: [
    Maps
  ]
})
export class MapsModule { }
