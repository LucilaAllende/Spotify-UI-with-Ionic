import { Component } from '@angular/core';

import recentlyPlayed from '../../assets/data/recentlyPlayed.json';
import heavyRotation from '../../assets/data/heavyRotation.json';
import jumpBackIn from '../../assets/data/jumpBackIn.json';
import { Router } from '@angular/router';
import { SharedUtilsService } from '../services/shared-utils.service';

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

  constructor(
    private router: Router,
    private sharedUtilsService: SharedUtilsService
  ) {}

  dasherize(str: string) {
    return this.sharedUtilsService.dasherize(str);
  }

  openAlbum(album: { id: number; image: string; title: string; }) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

}
