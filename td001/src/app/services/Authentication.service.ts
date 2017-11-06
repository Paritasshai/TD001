import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";
import {AlertService} from "../alertContent/AlertService";
import {FacebookService, InitParams} from 'ngx-facebook';

//const URL = 'http://localhost:8080/';
const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Injectable()
export class AuthenticationService {
  //url = "localhost";
  //url = "192.168.1.7";

  constructor(private http: Http,
              private router: Router,
              private alertService: AlertService,
              private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '679370048928070',
      status: true, // check login status
      cookie: true, // enable cookies to allow the server to access the session
      xfbml: true,  // parse XFBML
      version: 'v2.10'
    };

    fb.init(initParams);
  }

  login(email: string, password: string) {
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/user/login' + "?Email=" + email + "&" + "Password=" + password).map((response: Response) => {
    //return this.http.get('http://' + this.url + ':8080/user/login' + "?Email=" + email + "&" + "Password=" + password).map((response: Response) => {
    return this.http.get(URL + 'user/login' + "?Email=" + email + "&" + "Password=" + password).map((response: Response) => {

        // login successful if there's a jwt token in the response
        let user = response.json();
        // console.log(user);

        // console.log(user.firstName);
        // console.log(user.email);
        // console.log(user.statusUser[0].statusName);

        // if (localStorage.getItem('currentUser') === null) {
        if (user.status === "new") {
          this.alertService.error("Please Activate Your Email Account");
          alert("Please Activate Your Email Account");
          this.router.navigate(['/home']);
        } else {
          //store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          // if (localStorage.getItem('currentUser') === null) {
          //   localStorage.setItem('currentUser', JSON.stringify(user.firstName));
          this.alertService.success('Login successful', true);
          //alert("Success");
        }
        // location.reload();
        return user;
        // }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
