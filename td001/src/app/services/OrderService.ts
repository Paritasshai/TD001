import {Injectable} from '@angular/core';
import {Order} from "../models/Order";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrderService {
  //url = "localhost";
  //url = "192.168.1.7";

  constructor(private http: Http) {
  }

  createOrders(orderPayment: Order, userId: any) {
    return this.http.post('http://103.76.180.120:8080/tamdai-service/create/order' + "?userId=" + userId, orderPayment).map((response: Response) => response.json());
    //return this.http.post('http://' + this.url + ':8080/create/order' + "?userId=" + userId, orderPayment).map((response: Response) => response.json());
  }

  getPayments(): Observable<Order[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://103.76.180.120:8080/tamdai-service/get/orderAll', options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/get/orderAll', options).map((response: Response) => response.json());
  }

  getPaymentsById(id): Observable<Order[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://103.76.180.120:8080/tamdai-service/getOrder/' + id, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getOrder/' + id, options).map((response: Response) => response.json());
  }

  getPaymentId(id): Observable<Order[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://103.76.180.120:8080/tamdai-service/getOrder/' + id, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getOrder/' + id, options).map((response: Response) => response.json());
  }

}
