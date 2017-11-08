import {Injectable} from "@angular/core";
import {Http} from '@angular/http';

const URL = 'http://localhost:8080/';
//const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Injectable()
export class forgotPassword {
  url = "localhost";
  //url = "192.168.1.7";

  constructor(private http: Http) {
  }

  forgot(email: string) {
    return this.http.get(URL + 'user/forgotPassword' + "?Email=" + email)
    //return this.http.get('http://' + this.url + ':8080/user/forgotPassword' + "?Email=" + email)
  }
}
