import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import albums from 'src/assets/data/albums';
import { SharedUtilsService } from '../services/shared-utils.service';

export interface Track {
  title: string;
  seconds: number;
}

export interface Album {
  artist: string;
  backgroundColor: string;
  image: string;
  released: number;
  title: string;
  tracks: Track[];
}
@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {

  data: Album | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedUtilsService: SharedUtilsService
  ) { }

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodeTitle = decodeURIComponent(title as string);
    this.data = albums[decodeTitle]
  }

  dasherize(str: string) {
    return this.sharedUtilsService.dasherize(str);
  }

}
