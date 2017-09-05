import {Injectable} from "@angular/core";
import {Http} from '@angular/http';

@Injectable()
export class forgotPassword {

  constructor(private http: Http) {
  }

  forgot(email: string) {
    return this.http.get('http://localhost:8080/user/forgotPassword' + "?Email=" + email)
  }
}
