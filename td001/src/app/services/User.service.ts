import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/User';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get('http://localhost:8080/user/list', this.jwt()).map((response: Response) => response.json());
  }

  getUsers(): Observable<User[]> {
    // add authorization header with jwt token
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/user/list', options)
      .map((response: Response) => response.json());
  }

  createUsers(user: User) {
    return this.http.post('http://localhost:8080/user/register', user).map((response: Response) => response.json());
    // return this.http.post('https://tamdaiserver.herokuapp.com/user/register', user).map((response: Response) => response.json());
    // return this.http.post('https://peaceful-reaches-52826.herokuapp.com/user/register', user).map((response: Response) => response.json());
  }

  // private helper methods
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser) {
      let headers = new Headers({'Authorization': 'Bearer '});
      return new RequestOptions({headers: headers});
    }
  }

  updateUserStatus(id, statusName, user: User) {
    return this.http.put('http://localhost:8080/update/userStatus/' + id + "/" + "?statusName=" + statusName, user).map((response: Response) => response.json());
  }

}

