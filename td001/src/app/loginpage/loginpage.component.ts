import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from '../services/Authentication.service';
import {AlertService} from "../directives/AlertService";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  ImgLogo: string;
  ImgLogin: string;
  users: User[] = [];
  model: any = {};
  loading = false;

  // returnUrl: string;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {

    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgLogin = '../../assets/images/login.jpg';
  }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    //get users
    // this.getUsers();
  };

  // getUsers() {
  //   this.userService.getUsers()
  //     .subscribe(users => {
  //       this.users = users;
  //     });
  // }

  signIn() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.loading = false;
          this.router.navigate(['/home']);
        },
        error => {
          this.loading = false;
        });
  }

}
