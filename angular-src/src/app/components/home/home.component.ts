import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user : boolean;

  constructor( private authService: AuthService) {
   

  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {

      this.user = true;
    },

      err => {
        console.log("err");
        return false;
      });
  }
}
