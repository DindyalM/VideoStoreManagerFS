import { Component, OnInit } from '@angular/core';
import { Video } from '../../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  admin: boolean;

  videos: Video[] = [
    {
        id: 1,
        title: 'The Godfather',
        runtime: 80,
        genre: 'Crime',
        rating: 4,
        director: 'Francis Ford Coppola',
        available: true
    },
    {
        id: 2,
        title: 'Shawshank Redemption',
        runtime: 120,
        genre: 'Drama',
        rating: 5,
        director: 'Frank Darabont',
        available: false
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        runtime: 110,
        genre: 'Comedy',
        rating: 1,
        director: 'Quentin Tarantino',
        available: true
    },
    {
        id: 4,
        title: 'Star Wars',
        runtime: 95,
        genre: 'SciFi',
        rating: 5,
        director: 'George Lucas',
        available: true
    },
    {
        id: 5,
        title: 'GoodFellas',
        runtime: 110,
        genre: 'Crime',
        rating: 2,
        director: 'Martin Scorcese',
        available: false
    }
  ];

  constructor() { }

  ngOnInit() {
    this.admin = true;
  }

}
