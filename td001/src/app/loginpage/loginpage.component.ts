import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from '../services/Authentication.service';
import {AlertService} from "../alertContent/AlertService";

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

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {

    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgLogin = '../../assets/images/login.jpg';
  }

  ngOnInit() {
  };

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
