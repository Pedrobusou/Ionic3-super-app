import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html'
})

export class YoutubePage {
  videos: any[] = [
    {
      title: "Using the DomSanitizer to Embed YouTube Videos in Ionic 2 / Angular Applications",
      video: "https://www.youtube.com/watch?v=2JeKfQ2r2r8"
    },
    {
      title: "Create a Flashlight Application with Ionic 2",
      video: "https://www.youtube.com/watch?v=9yZEvkofi24"
    },
    {
      title: "Create a Barcode/QR Code Scanner Application with Ionic 2",
      video: "https://www.youtube.com/watch?v=bogYgE7aYL8"
    },
    {
      title: "Speech to Text Application with Ionic 2 and Ionic Native 3+",
      video: "https://www.youtube.com/watch?v=dPbT_kElSXA"
    },
    {
      title: "Ionic 2 Text to Speech / Ionic Native 3.x.x",
      video: "https://www.youtube.com/watch?v=GfKJ49DG7yc"
    },
    {
      title: "Mocking an Ionic 2 Camera Application with Ionic Native 3.x+",
      video: "https://www.youtube.com/watch?v=F8iO1p83Djw"
    }
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) { }

}