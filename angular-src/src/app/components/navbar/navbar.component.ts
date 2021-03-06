import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: boolean;

  constructor(  private authService: AuthService,
    private router:Router,
    private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
    //check user
    this.authService.getProfile().subscribe(profile => {

      this.user = true;
      },

      err => {
        console.log("err");
        return false;
      });
  }

  onLogoutClick(){
    this.authService.logout();
    this.ngFlashMessageService.showFlashMessage({
      messages: ["you have been logged out"], 
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true, 
      // Time after which the flash disappears defaults to 2000ms
      timeout: 3000,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'success'
    });
    this.router.navigate(['/login']);
  }
}
