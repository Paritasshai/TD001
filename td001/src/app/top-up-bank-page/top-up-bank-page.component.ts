import {Component, Input, OnInit} from '@angular/core';
import {BankStatementService} from "../services/BankStatementService";
import {User} from "../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {Order} from "app/models/order";
import {OrderService} from "../services/OrderService";

@Component({
  selector: 'app-top-up-bank-page',
  templateUrl: './top-up-bank-page.component.html',
  styleUrls: ['./top-up-bank-page.component.css'],
})

export class TopUpBankPageComponent implements OnInit {
  bankStatement: any = {};
  currentUser: User;
  userId: any;
  // orderPayments: Order[] = [];
  public orderDetail;
  orderPaymentsIds: any = {};

  constructor(private bankStatementService: BankStatementService,
              private router: Router,
              private orderService: OrderService,
              private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.id;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.orderDetail = id;
    // this.getPaymentList();
    this.getPaymentId(this.orderDetail);
  }

  // private getPaymentList() {
  //   this.orderService.getPayments().subscribe(payments => {
  //     this.orderPayments = payments;
  //   });
  // }

  private getPaymentId(orderDetail) {
    this.orderService.getPaymentsById(orderDetail).subscribe(payments => {
      this.orderPaymentsIds = payments;
      console.log(this.orderPaymentsIds);
    });
  }

  Submit() {
    console.log(this.bankStatement);

    this.bankStatement.statementAmount = this.orderPaymentsIds.transAmount;
    this.bankStatement.paymentId = this.orderPaymentsIds.transRef;
    console.log(this.bankStatement.statementAmount);
    this.bankStatementService.createBankStatements(this.bankStatement, this.userId)
      .subscribe(
        data => {
          setTimeout(function () {
            location.reload();
          }, 2000);
          this.router.navigate(['/userProfile']);
          alert("Success");
        },
        error => {
          alert("Error")
        });
  }

}
