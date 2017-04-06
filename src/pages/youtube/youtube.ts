import { Component } from '@angular/core';

@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html'
})

export class YoutubePage {
  videos: any[] = [
    {
      title: "Setting Notification Badges",
      video: "https://www.youtube.com/embed/HeAD6DaKbns?showinfo=0"
    },
    {
      title: "Create a Phone Call Application",
      video: "https://www.youtube.com/embed/7kKcpgcSW60?showinfo=0"
    },
    {
      title: "Using the DomSanitizer to Embed YouTube Videos",
      video: "https://www.youtube.com/embed/2JeKfQ2r2r8?showinfo=0"
    },
    {
      title: "Create a Flashlight Application",
      video: "https://www.youtube.com/embed/9yZEvkofi24?showinfo=0"
    },
    {
      title: "Create a Barcode/QR Code Scanner Application",
      video: "https://www.youtube.com/embed/bogYgE7aYL8?showinfo=0"
    },
    {
      title: "Speech to Text Application",
      video: "https://www.youtube.com/embed/dPbT_kElSXA?showinfo=0"
    },
    {
      title: "Ionic 2 Text to Speech",
      video: "https://www.youtube.com/embed/GfKJ49DG7yc?showinfo=0"
    },
    {
      title: "Mocking an Ionic 2 Camera Application",
      video: "https://www.youtube.com/embed/F8iO1p83Djw?showinfo=0"
    }
  ]

  constructor() { }
}