import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-top-up-page',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getUserList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

}
