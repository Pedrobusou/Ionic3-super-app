import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/*
  Generated class for the Youtube pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'youtube'
})
@Injectable()
export class Youtube {

  constructor(private dom: DomSanitizer) {

  }

  transform(value, args) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }
}
