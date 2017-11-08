import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {BankStatement} from "../models/BankStatement";
import {Observable} from "rxjs/Observable";

const URL = 'http://localhost:8080/';
//const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Injectable()
export class PaymentTransService {
  //url = "localhost";
  //url = "192.168.1.7";

  constructor(private http: Http) {
  }

  getPaymentTrans(): Observable<BankStatement[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'get/PaymentTransaction', options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/get/PaymentTransaction', options).map((response: Response) => response.json());
  }

}
