import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})

export class Maps {
  latitude: number = 28.12;
  longitude: number = -15.43;
  zoom: number = 10;

  constructor() { }
}