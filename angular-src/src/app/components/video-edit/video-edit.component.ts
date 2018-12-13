import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideoService } from '../../services/video.service';
import { Video } from '../../video';
import { GENRES } from '../../video-genres';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {
  video: Video;
  videoForm: FormGroup;
  genres: string[] = GENRES;
  ratings = [1, 2, 3, 4, 5];
  status = ['Available', 'Reserved'];
  id: number;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.videoService.getVideo(this.id)
        .subscribe(video => {
          this.video = video;
          this.populateForm();
        });
    } else {
      this.createForm();
    }
  }

  submitForm(videoForm: FormGroup): void {
    const vid = videoForm.value;
    vid.available = JSON.parse(vid.available);
    if (this.id) {
      vid.id = this.id;
      this.videoService.updateVideo(vid)
        .subscribe();
    } else {
      this.videoService.addVideo(vid)
        .subscribe();
    }
    this.location.back();
  }

  createForm(): void {
    this.videoForm = this.fb.group({
      title: ['', Validators.required],
      runtime: ['', Validators.required],
      genre: ['', Validators.required],
      rating: ['', Validators.required],
      director: ['', Validators.required],
      available: ['', Validators.required]
    });
  }

  populateForm(): void {
    this.videoForm = this.fb.group({
      title: [this.video.title, Validators.required],
      runtime: [this.video.runtime, Validators.required],
      genre: [this.video.genre, Validators.required],
      rating: [this.video.rating, Validators.required],
      director: [this.video.director, Validators.required],
      available: [this.video.available]
    });
  }
}
