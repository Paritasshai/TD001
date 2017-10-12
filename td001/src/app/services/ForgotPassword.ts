import {Injectable} from "@angular/core";
import {Http} from '@angular/http';

@Injectable()
export class forgotPassword {
  //url = "localhost";
  url = "192.168.1.7";

  constructor(private http: Http) {
  }

  forgot(email: string) {
    return this.http.get('http://' + this.url + ':8080/user/forgotPassword' + "?Email=" + email)
  }
}
