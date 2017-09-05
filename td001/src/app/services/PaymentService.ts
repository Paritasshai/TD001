import {Injectable} from '@angular/core';
import {Payment} from "../models/payment";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PaymentService {

  constructor(private http: Http) {
  }

  createPayments(payment: Payment, userId: any) {
    return this.http.post('http://localhost:8080/create/payment' + "?userId=" + userId, payment).map((response: Response) => response.json());
  }

  getPayments(): Observable<Payment[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/get/paymentAll', options)
      .map((response: Response) => response.json());
  }

}
