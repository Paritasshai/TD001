import {Injectable} from "@angular/core";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {PurchaseCard} from "../models/PurchaseCard";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PurchaseCourseService {

  constructor(private http: Http) {
  }

  // createBuyCourse(id, userId, userCart: PurchaseCard) {
  //  return this.http.post('http://localhost:8080/savePurchaseCart' + "?userId=" + userId + "&" + "courseId=" + id, userCart).map((response: Response) => response.json());
  // }

  // createBuyCourse(id, userId, userCart: PurchaseCard) {
  //   return this.http.post('http://localhost:8080/savePurchaseCart' + "?userId=" + userId + "&" + "courseId=" + id, userCart).map((response: Response) => response.json());
  // }

  createBuyCourse(userId, id, purchaseCart: PurchaseCard) {
    return this.http.post('http://localhost:8080/saveCart/' + "?userId=" + userId + "&" + "courseId=" + id, purchaseCart).map((response: Response) => response.json());
  }

  getCarts(): Observable<PurchaseCard[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/getPurchaseCartList', options)
      .map((response: Response) => response.json());
  }

}
