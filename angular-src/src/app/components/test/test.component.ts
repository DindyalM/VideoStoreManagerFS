import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from 'src/app/services/video.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title:String;
  runtime:Number;
  genre: String; 
  rating: Number; 
  director: String; 
  avaliable: Boolean;

  constructor(
    private VideoService: VideoServiceService, ) { }

  ngOnInit() {
  }

  addVideo(){
    const video = {
      title: this.title,
      runtime: this.runtime, 
      genre: this.genre, 
      rating: this.rating, 
      director: this.director, 
      avaliable: this.avaliable
    }
    console.log(video);

    this.VideoService.addVid(video).subscribe(data => {
      if(data["success"]){
        console.log("added")
      }
    })
  }
}
  
