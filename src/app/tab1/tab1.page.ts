import { Component } from '@angular/core';

import recentlyPlayed from '../../assets/data/recentlyPlayed.json';
import heavyRotation from '../../assets/data/heavyRotation.json';
import jumpBackIn from '../../assets/data/jumpBackIn.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    },
  ]

  constructor() {}

  // Helper function for images names
  dasherize(str: string) {
    return str.replace(/[A-Z]/g, function (char, index) {
      return (index!==0 ? '-': '') + char.toLowerCase();
    })
  }

  openAlbum(album: { id: number; image: string; title: string; }) {
    console.log(album);
  }

}
