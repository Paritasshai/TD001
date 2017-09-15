import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/User.service";

@Component({
  selector: 'app-top-up-page',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  admin = "admin";
  active = "active";
  instructor = "instructor";

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
