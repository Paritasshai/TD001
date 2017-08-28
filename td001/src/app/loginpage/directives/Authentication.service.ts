import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(private http: Http) {
  }

  login(firstName: string, password: string) {
    return this.http.get('http://localhost:8080/user/login' + "?FirstName=" + firstName + "&" + "Password=" + password)
      .map((response: Response) => {

        // login successful if there's a jwt token in the response
        let user = response.json();
        console.log(user);

        if (user && user.firstName) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          window.localStorage.setItem('currentUser', JSON.stringify({username: firstName}));
          console.log(user.firstName);
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
