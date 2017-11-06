import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {PurchaseCard} from "../models/PurchaseCard";
import {Observable} from "rxjs/Observable";

const URL = 'http://localhost:8080/';
//const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Injectable()
export class PurchaseCourseService {
  //url = "localhost";
  //url = "192.168.1.7";

  constructor(private http: Http) {
  }

  createBuyCourse(userId, id, purchaseCart: PurchaseCard, result: any, price, name) {
    return this.http.post(URL + 'saveCart/' + "?userId=" + userId + "&" + "courseId=" + id + "&" + "Balance=" + result + "&" + "transAmount=" + price+ "&" + "courseName=" + name, purchaseCart).map((response: Response) => response.json());
    //return this.http.post('http://' + this.url + ':8080/saveCart/' + "?userId=" + userId + "&" + "courseId=" + id + "&" + "Balance=" + result + "&" + "transAmount=" + price+ "&" + "courseName=" + name, purchaseCart).map((response: Response) => response.json());
  }

  getCarts(): Observable<PurchaseCard[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getPurchaseCartList', options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getPurchaseCartList', options).map((response: Response) => response.json());
  }

}
