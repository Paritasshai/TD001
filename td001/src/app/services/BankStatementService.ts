import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {BankStatement} from "../models/BankStatement";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BankStatementService {

  constructor(private http: Http) {
  }

  createBankStatements(bankStatement: BankStatement, userId: any) {
    return this.http.post('http://localhost:8080/create/bankStatement' + "?userId=" + userId, bankStatement).map((response: Response) => response.json());
  }

  getBankStatements(): Observable<BankStatement[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/get/bankStatement', options)
      .map((response: Response) => response.json());
  }

  confirmBankStatements(id, firstName, bankStatement: BankStatement, userId: string, result: any) {
    return this.http.put('http://localhost:8080/update/bankStatement/' + id + "?UserId=" + userId + "&" + "Balance=" + result + "&" + "FirstName=" + firstName, bankStatement).map((response: Response) => response.json());
  }

  getBankStatementsById(): Observable<BankStatement[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/get/bankStatement/{id}', options)
      .map((response: Response) => response.json());
  }

}
