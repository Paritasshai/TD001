import {Injectable} from '@angular/core';
import {Order} from "../models/Order";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  createOrders(orderPayment: Order, userId: any) {
    return this.http.post('http://localhost:8080/create/order' + "?userId=" + userId, orderPayment).map((response: Response) => response.json());
  }

  getPayments(): Observable<Order[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/get/orderAll', options)
      .map((response: Response) => response.json());
  }

  getPaymentsById(id): Observable<Order[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/getOrder/' + id, options)
      .map((response: Response) => response.json());
  }

  getPaymentId(id): Observable<Order[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/getOrder/' + id, options)
      .map((response: Response) => response.json());
  }

}
