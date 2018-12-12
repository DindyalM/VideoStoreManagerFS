import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String; 

  constructor(
    private validateService: ValidateService , 
    private ngFlashMessageService: NgFlashMessageService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email, 
      username: this.username, 
      password: this.password
    }

    // Required Feilds 
    if(!this.validateService.validateRegister(user)){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please use fill the entire form"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: false,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please us a valid email"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }
  
  //Register User
    this.authService.registerUser(user).subscribe( data =>{
      if(data['success']){
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["registered"], 
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: 3000,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'success'
        });
      this.router.navigate(['/login']);
      } else{
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["somethings wrong"], 
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: 3000,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'danger'
        });
      this.router.navigate(['/register']);

      }
    });

  }
}
