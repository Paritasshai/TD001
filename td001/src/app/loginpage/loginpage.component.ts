import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';
import {AuthenticationService} from '../services/Authentication.service';
import 'rxjs/add/operator/map';
import {Http, Response} from "@angular/http";

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
  User: {};

  constructor(private authenticationService: AuthenticationService,
              private http: Http) {

    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgLogin = '../../assets/images/login.jpg';
  }

  // loginWithFacebook() {
  // FB.login((response: any) => {
  //   if (response.status === 'connected') {
  //     this.me(response.authResponse.userID, response.authResponse.accessToken);
  //     // Logged into your app and Facebook.
  //   } else if (response.status === 'not_authorized') {
  //     // The person is logged into Facebook, but not your app.
  //   } else {
  //     // The person is not logged into Facebook, so we're not sure if
  //     // they are logged into this app or not.
  //     FB.login();
  //   }
  // }, {scope: 'user_friends,email'});
  //}

  // me(userId, accessToken) {
  //   FB.api("/" + userId + '?fields=id,first_name,last_name,email',
  //     (response) => {
  //       this.User = response;
  //       console.log(this.User);
  //       if (this.User != null) {
  //         this._http.get('http://localhost:8080/user/list').map((response: Response) => response.json());
  //         alert("success");
  //       } else
  //         alert("failed");
  //     })
  // };

  // saveUser() {
  //   FB.getLoginStatus((response) => {
  //     this.User = response;
  //     if (response.status === 'connected') {
  //       return this._http.post('http://localhost:8080/user/register', this.User).map((response: Response) => response.json());
  //     }
  //   })
  // }

  // loginWithFacebook() {
  //   FB.login(response => {
  //     if (response.status === 'connected') {
  //       // Logged into your app and Facebook.
  //       this.userFbId = response.authResponse.userID;
  //       this.token = response.authResponse.accessToken;
  //       console.log(this.userFbId);
  //       console.log(this.token);
  //       this.me();
  //     } else {
  //       // The person is not logged into this app or we are unable to tell.
  //       FB.login();
  //     }
  //   });
  // }

  loginWithFacebook() {
    return this.http.get('http://localhost:8080/user/facebook')
      .subscribe(
        data => {
          //alert("Success");
          this.loading = false;
        },
        error => {
          alert("Failed");
          this.loading = false;
        });
  }

  // me() {
  //   FB.api('/me?fields=id,name,first_name,last_name,email',
  //     function (result) {
  //       if (result && !result.error) {
  //         this.User = result;
  //         //console.log(this.User);
  //         console.log(this.User.first_name);
  //         console.log(this.User.last_name);
  //         console.log(this.User.email);
  //         this.save();
  //         //this._http.post('http://localhost:8080/user/registerWithFacebook/', this.User).map((response: Response) => response.json());
  //       } else {
  //       }
  //     });
  // }

  // save(){
  //   return this.http.get('http://localhost:8080/user/facebook')
  //     .subscribe(
  //       data => {
  //         //alert("Success");
  //         this.loading = false;
  //       },
  //       error => {
  //         alert("Failed");
  //         this.loading = false;
  //       });
  // }

  ngOnInit() {
    // FB.getLoginStatus(response => {
    //   this.statusChangeCallback(response);
    // });
  };

  // statusChangeCallback(response: any) {
  //   if (response.status === 'connected') {
  //     console.log('Connected');
  //   } else {
  //     console.log('Disconnected');
  //   }
  // }

  signIn() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          //alert("Success");
          this.loading = false;
          location.reload();
        },
        error => {
          alert("Failed");
          this.loading = false;
        });
  }
}
