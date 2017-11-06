import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/User';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {FacebookService, InitParams} from "ngx-facebook";

//const URL = 'http://localhost:8080/';
const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Injectable()
export class UserService {
  //url = "localhost";
  //url = "192.168.1.7";

  constructor(private http: Http,
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

  getAll() {
    return this.http.get(URL + 'user/list', this.jwt()).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/user/list', this.jwt()).map((response: Response) => response.json());
  }

  // getUsers(): Observable<User[]> {
  //   // add authorization header with jwt token
  //   let headers = new Headers({'Authorization': 'Bearer '});
  //   let options = new RequestOptions({headers: headers});
  //
  //   // get users from api
  //   return this.http.get('http://103.76.180.120:8080/tamdai-service/user/list', options).map((response: Response) => response.json());
  //   //return this.http.get('http://' + this.url + ':8080/user/list', options).map((response: Response) => response.json());
  // }

  deleteImage(id, userId: any) {
    return this.http.delete(URL + 'delete/ImageUser/' + "?imageId=" + id + "&" + "userId=" + userId).map((response: Response) => response.json());
    //return this.http.delete('http://' + this.url + ':8080/delete/ImageUser/' + "?imageId=" + id + "&" + "userId=" + userId).map((response: Response) => response.json());
  }

  createUsers(user: User) {
    return this.http.post(URL + 'user/register', user).map((response: Response) => response.json());
    //return this.http.post('http://' + this.url + ':8080/user/register', user).map((response: Response) => response.json());
  }

  // createUserFb(user: User) {
  //   return this.http.post('http://103.76.180.120:8080/tamdai-service/user/register', user).map((response: Response) => response.json());
  //   //return this.http.post('http://' + this.url + ':8080/user/register', user).map((response: Response) => response.json());
  // }

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
    return this.http.put(URL + 'update/userStatus/' + id + "/" + "?statusName=" + statusName, user).map((response: Response) => response.json());
    //return this.http.put('http://' + this.url + ':8080/update/userStatus/' + id + "/" + "?statusName=" + statusName, user).map((response: Response) => response.json());
  }

}

