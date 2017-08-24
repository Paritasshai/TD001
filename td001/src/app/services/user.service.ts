import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get('http://localhost:8080/user/list')
      .map((response: Response) => response.json());
  }

  createUsers(user: User) {
    return this.http.post('http://localhost:8080/user/register', user).map((response: Response) => response.json());
    // return this.http.post('https://tamdaiserver.herokuapp.com/user/register', user).map((response: Response) => response.json());
  }
}

