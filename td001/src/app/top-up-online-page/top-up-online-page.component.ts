import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {OrderService} from "../services/OrderService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-up-online-page',
  templateUrl: './top-up-online-page.component.html',
  styleUrls: ['./top-up-online-page.component.css'],
})
export class TopUpOnlinePageComponent implements OnInit {
  currentUser: User;
  value = '';
  Order: any = {};
  userId: any;
  values = '';

  constructor(private orderService: OrderService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.id;
  }

  ngOnInit() {
  }

  onEnter(value: string) {
    this.value = value;
  }


  onKey(value: string) {
    this.values = value;
  }

  Confirm() {
    console.log(this.Order);
    console.log(this.currentUser.id);
    this.orderService.createOrders(this.Order, this.userId)
      .subscribe(
        data => {
          setTimeout(function () {
            location.reload();
          }, 1000);
          this.router.navigate(['/userProfile']);
          alert("Success");
        },
        error => {
          alert("Error")
        });
  }
}
