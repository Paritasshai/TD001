import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {BankStatement} from "../models/BankStatement";
import {Observable} from "rxjs/Observable";

//const URL = 'http://localhost:8080/';
const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Injectable()
export class BankStatementService {

  constructor(private http: Http) {
  }

  createBankStatements(bankStatement: BankStatement, userId: any) {
    return this.http.post(URL + 'create/bankStatement' + "?userId=" + userId, bankStatement).map((response: Response) => response.json());
    //return this.http.post('http://' + this.url + ':8080/create/bankStatement' + "?userId=" + userId, bankStatement).map((response: Response) => response.json());
  }

  getBankStatements(): Observable<BankStatement[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'get/bankStatement', options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/get/bankStatement', options).map((response: Response) => response.json());
  }

  confirmBankStatements(id, email, paymentId, statementAmount, bankOrderId, bankStatement: BankStatement, userId: string, result: any) {
    return this.http.put(URL + 'update/bankStatement/' + id + "?UserId=" + userId + "&" + "Balance=" + result + "&" + "Email=" + email + "&" + "transRef=" + paymentId + "&" + "transAmount=" + statementAmount + "&" + "orderId=" + bankOrderId, bankStatement).map((response: Response) => response.json());
    //return this.http.put('http://' + this.url + ':8080/update/bankStatement/' + id + "?UserId=" + userId + "&" + "Balance=" + result + "&" + "Email=" + email + "&" + "transRef=" + paymentId + "&" + "transAmount=" + statementAmount + "&" + "orderId=" + bankOrderId, bankStatement).map((response: Response) => response.json());
  }

  getBankStatementsById(): Observable<BankStatement[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'get/bankStatement/{id}', options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/get/bankStatement/{id}', options).map((response: Response) => response.json());
  }

}
