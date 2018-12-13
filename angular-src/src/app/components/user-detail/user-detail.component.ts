import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = {
    id: 1,
    firstName: 'Adair',
    lastName: 'Turner',
    address: '835 Nanton Rd',
    city: 'Vaughan',
    phone: '416-889-1010',
    active: false
  };

  constructor() { }

  ngOnInit() {
  }

}
