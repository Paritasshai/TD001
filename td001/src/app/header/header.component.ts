import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/Authentication.service";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  ImgLogo: string;
  loading = false;
  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/logo.png';
  }

  ngOnInit() {
  }

  // get currentUser(): any {
  //   // Retrieve the object from storage
  //   return localStorage.getItem('currentUser');
  // }

  logOut() {
    this.loading = true;
    console.log("Log Out");
    setTimeout(() => {
      this.authenticationService.logout();
      window.location.reload();
    }, 1000);
  }

}
