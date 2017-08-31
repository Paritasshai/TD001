import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit {
  ImgProfile: string;
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgProfile = '../../assets/images/004.jpg';
  }

  ngOnInit() {
  }

}
