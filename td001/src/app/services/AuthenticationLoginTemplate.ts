import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {AlertService} from "../alertContent/AlertService";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationLoginTemaplateService {

  constructor(private router: Router,
              private http: Http,
              private alertService: AlertService) {
  }

  login(email: string, password: string) {
    return this.http.get('http://localhost:8080/user/login' + "?Email=" + email + "&" + "Password=" + password)
      .map((response: Response) => {

        // login successful if there's a jwt token in the response
        let user = response.json();

        if (user.status === "new") {
          alert("Please Activate Your Email Account");
          this.alertService.error("Please Activate Your Email Account", true);
        } else {
          //store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.alertService.success("Login successful");
        }
        setTimeout(function () {
          location.reload();
          this.router.navigate(['/Home']);
        }, 2000);
        return user;
        // }
      });
  }

}
