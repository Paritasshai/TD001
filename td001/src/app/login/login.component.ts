import {Component, OnInit} from '@angular/core';
import {AuthenticationLoginTemaplateService} from "../services/AuthenticationLoginTemplate";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private authenticationLoginTemaplateService: AuthenticationLoginTemaplateService) {
  }

  ngOnInit() {
  }

  signIn() {
    this.loading = true;
    this.authenticationLoginTemaplateService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.loading = false;
        },
        error => {
          this.loading = false;
        });
  }

}
