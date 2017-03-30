import { Component } from '@angular/core';

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})

export class MapsPage {
  latitude: number = 28.12;
  longitude: number = -15.43;
  zoom: number = 10;

  constructor() { }
}