import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {BankStatement} from "../models/BankStatement";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PaymentTransService {

  constructor(private http: Http) {
  }

  getPaymentTrans(): Observable<BankStatement[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/get/PaymentTransaction', options)
      .map((response: Response) => response.json());
  }

}
