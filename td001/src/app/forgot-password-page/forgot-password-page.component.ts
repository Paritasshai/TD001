import {Component, OnInit} from '@angular/core';
import {forgotPassword} from "../services/forgotPassword";

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {
  User: any = {};

  constructor(private forgotPasswordService: forgotPassword) {
  }

  ngOnInit() {
  }

  forgotPassword() {
    console.log("Submit Email");
    this.forgotPasswordService.forgot(this.User.email)
  }

}
