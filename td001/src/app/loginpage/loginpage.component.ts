import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/User.service';
import {User} from '../models/User';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from '../services/Authentication.service';
import {AlertService} from "../alertContent/AlertService";
import {FacebookService} from 'ngx-facebook';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

declare const FB: any;

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
  token: any;
  userFbId: any;
  loged: boolean = false;
  user: any = {};

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private fb: FacebookService,
              private http: Http) {

    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgLogin = '../../assets/images/login.jpg';
  }

  // statusChangeCallback(response: any) {
  //   if (response.status === 'connected') {
  //     console.log('connected');
  //     this.userFbId = response.authResponse.userID;
  //     this.token = response.authResponse.accessToken;
  //     console.log(this.userFbId);
  //     console.log(this.token);
  //   } else {
  //     FB.login();
  //   }
  // }

  loginWithFacebook() {
    FB.login(response => {
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        this.userFbId = response.authResponse.userID;
        this.token = response.authResponse.accessToken;
        console.log(this.userFbId);
        console.log(this.token);
        this.me();
      } else {
        // The person is not logged into this app or we are unable to tell.
        FB.login();
      }
    });

  }

  me() {
    FB.api('/me?fields=id,name,first_name,last_name',
      function (result) {
        if (result && !result.error) {
          this.user = result;
          // console.log(this.user);
          console.log(this.user.first_name);
          console.log(this.user.last_name);

        } else {
          console.log(result.error);
        }
      });
  }

  ngOnInit() {
  };

  signIn() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          alert("Success");
          this.loading = false;
          location.reload();
        },
        error => {
          alert("Failed");
          this.loading = false;
        });
  }

}
