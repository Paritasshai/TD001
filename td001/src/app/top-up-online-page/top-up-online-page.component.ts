import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {PaymentService} from "../services/PaymentService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-up-online-page',
  templateUrl: './top-up-online-page.component.html',
  styleUrls: ['./top-up-online-page.component.css']
})
export class TopUpOnlinePageComponent implements OnInit {
  currentUser: User;
  value = '';
  Payment: any = {};
  userId: any;

  constructor(private paymentService: PaymentService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.id;
  }

  ngOnInit() {
  }

  onEnter(value: string) {
    this.value = value;
  }

  Confirm() {
    console.log(this.Payment);
    console.log(this.currentUser.id);
    this.paymentService.createPayments(this.Payment, this.userId)
      .subscribe(
        data => {
          alert("Success");
          this.router.navigate(['/userProfile']);
        },
        error => {
          alert("Error")
        });
  }
}
