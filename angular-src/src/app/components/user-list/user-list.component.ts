import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { USERS } from '../../mock-users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = USERS;

  constructor() { }

  ngOnInit() {
  }

}
