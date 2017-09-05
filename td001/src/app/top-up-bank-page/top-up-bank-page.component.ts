import {Component, OnInit} from '@angular/core';
import {BankStatementService} from "../services/BankStatementService";
import {User} from "../models/user";

@Component({
  selector: 'app-top-up-bank-page',
  templateUrl: './top-up-bank-page.component.html',
  styleUrls: ['./top-up-bank-page.component.css']
})
export class TopUpBankPageComponent implements OnInit {
  bankStatement: any = {};
  currentUser: User;
  userId: any;


  constructor(private bankStatementService: BankStatementService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.id;
  }

  ngOnInit() {
  }

  Submit() {
    console.log(this.bankStatement);
    this.bankStatementService.createBankStatements(this.bankStatement, this.userId)
      .subscribe(
        data => {
          alert("Success");
        },
        error => {
          alert("Error")
        });
  }

}
