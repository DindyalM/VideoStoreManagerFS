import { Component, OnInit } from '@angular/core';
import { Video } from '../../video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  searchTerm = '';

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

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    // this.getVideos();
    this.admin = true;
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

  delete(id: number): void {
    this.videos = this.videos.filter(video => video.id !== id);
    this.videoService.deleteVideo(id)
      .subscribe();
  }

  search(): void {
    if (!this.searchTerm.trim()) {
      this.getVideos();
    } else {
      this.videoService.searchVideos(this.searchTerm)
        .subscribe(videos => this.videos = videos);
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.getVideos();
  }
}
