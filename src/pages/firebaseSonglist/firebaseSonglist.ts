import { Component } from '@angular/core';
import { AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-firebaseSonglist',
  templateUrl: 'firebaseSonglist.html'
})

export class FirebaseSonglistPage {
  songs: FirebaseListObservable<any>;

  constructor(public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, af: AngularFire) {
    this.songs = af.database.list('/songs');
  }

  addSong() {
    let prompt = this.alertCtrl.create({
      title: 'New Song',
      inputs: [
        {
          name: 'author',
          placeholder: 'Author'
        },
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.songs.push({
              author: data.author,
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
  }

  showOptions(songId, songAuthor, songTitle) {
    let actionSheet = this.actionSheetCtrl.create({
      title: songAuthor + " - " + songTitle,
      buttons: [
        {
          text: 'Delete Song',
          role: 'destructive',
          handler: () => {
            this.removeSong(songId);
          }
        }, {
          text: 'Update song',
          handler: () => {
            this.updateSong(songId, songAuthor, songTitle);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  removeSong(songId: string) {
    this.songs.remove(songId);
  }

  updateSong(songId, songAuthor, songTitle) {
    let prompt = this.alertCtrl.create({
      title: 'Update Song',
      inputs: [
        {
          name: 'author',
          placeholder: 'Author',
          value: songAuthor
        },
        {
          name: 'title',
          placeholder: 'Title',
          value: songTitle
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.songs.update(songId, {
              author: data.author,
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
  }
}