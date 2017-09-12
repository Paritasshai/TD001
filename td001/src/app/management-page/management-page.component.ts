import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Order} from "../models/order";
import {OrderService} from "../services/OrderService";
import {BankStatement} from "../models/BankStatement";
import {BankStatementService} from "../services/BankStatementService";
import {PaymentTransService} from "../services/PaymentTransService";
import {isNullOrUndefined, isUndefined} from "util";

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css'],
})
export class ManagementPageComponent implements OnInit {
  users: User[] = [];
  orderPayments: Order[] = [];
  bankStatements: BankStatement[] = [];
  bankModel: any = {};
  bankStatement: any = {};
  userId: any;
  amount: any;
  result: any;
  paymentId: any;

  constructor(private userService: UserService,
              private orderService: OrderService,
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
    this.orderService.getPayments().subscribe(payments => {
      this.orderPayments = payments;
    });
  }

  private getBankStatementList() {
    this.bankStatementService.getBankStatements().subscribe(bankStatements => {
      this.bankStatements = bankStatements;
      this.amount = bankStatements[0].statementAmount;
      this.userId = bankStatements[0].id;
    });
  }

  ConfirmPayment(id, email, paymentId, statementAmount, balance) {
    console.log(id);
    console.log(email);
    console.log(statementAmount);
    console.log(balance);
    console.log(paymentId);

    this.result = parseFloat(statementAmount) + parseFloat(balance);
    console.log(this.result);

    this.bankStatementService.confirmBankStatements(id, email, paymentId, this.bankStatement, this.userId, this.result)
      .subscribe(
        data => {
          alert("Success");
          location.reload();
        },
        error => {
          alert("Error")
        });
  }

  DeletePayment() {
    console.log("Delete Payment");
  }
}
