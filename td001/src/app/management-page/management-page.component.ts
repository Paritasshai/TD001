import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Payment} from "../models/payment";
import {PaymentService} from "../services/PaymentService";
import {BankStatement} from "../models/BankStatement";
import {BankStatementService} from "../services/BankStatementService";

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css'],
})
export class ManagementPageComponent implements OnInit {
  users: User[] = [];
  payments: Payment[] = [];
  bankStatements: BankStatement[] = [];
  bankModel: any = {};
  bankStatement: any = {};
  userId: any;
  amount: any;

  constructor(private userService: UserService,
              private paymentService: PaymentService,
              private bankStatementService: BankStatementService) {
  }

  ngOnInit() {
    this.getUserList();
    this.getPaymentList();
    this.getBankStatementList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  private getPaymentList() {
    this.paymentService.getPayments().subscribe(payments => {
      this.payments = payments;
    });
  }

  private getBankStatementList() {
    this.bankStatementService.getBankStatements().subscribe(bankStatements => {
      this.bankStatements = bankStatements;
      this.amount = bankStatements[0].statementAmount;
      this.userId = bankStatements[0].id;
    });
  }

  ConfirmPayment(id, firstName, statementAmount) {
    console.log(id);
    console.log(firstName);
    console.log(statementAmount);
    this.bankStatementService.confirmBankStatements(id, firstName, this.bankStatement, this.userId, statementAmount)
      .subscribe(
        data => {
          alert("Success");
        },
        error => {
          alert("Error")
        });
  }

  DeletePayment() {
    console.log("Delete Payment");
  }
}
