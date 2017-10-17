import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/Authentication.service";
import {User} from "../models/User";
import {UserService} from "../services/User.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  ImgLogo: string;
  loading = false;
  currentUser: User;
  status: any;
  users: User[] = [];

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/logomake.png';
  }

  ngOnInit() {
      this.getUserList();
  }

  logOut() {
    this.loading = true;
    console.log("Log Out");
    setTimeout(() => {
      this.authenticationService.logout();
      window.location.reload();
    }, 1000);
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      if (this.users != undefined) {
        this.users = users;
      }
    });
  }

}
