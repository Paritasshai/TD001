import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private _http: Http) {
  }

  getAppService() {
    return this._http.get('http://localhost:8080/login')
      .map((response: Response) => response.json());
  }

}

