import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Video } from '../../video';
import { VideoService } from '../../services/video.service';
import { User } from '../../user';
import { USERS } from '../../mock-users';



@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  video: Video;
  users: User[] = USERS;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // this.getVideo();

    // remove this and use service once it's working
    this.video = {
      id: 1,
      title: 'The Godfather',
      runtime: 80,
      genre: 'Crime',
      rating: 4,
      director: 'Francis Ford Coppola',
      available: true
    };
  }

  getVideo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.videoService.getVideo(id)
      .subscribe(video => this.video = video);
  }

  reserve(): void {
    this.video.available = false;
    this.videoService.reserveVideo(this.video)
      .subscribe();
  }
}
