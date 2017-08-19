import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  createUsers(user: User) {
    return this.http.post('http://localhost:8080/register', user).map((response: Response) => response.json());
  }

}

