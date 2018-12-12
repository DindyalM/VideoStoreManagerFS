import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {

      this.user = {
        username: "",
        email: "",
      }

      this.user['username'] = profile['user']['name'];
      this.user['email'] = profile['user']['email'];
    },

      err => {
        console.log("err");
        return false;
      });
  }

}
