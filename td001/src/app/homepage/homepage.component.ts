import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../loginpage/directives/Authentication.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  loading = false;
  Img1: string;
  Img2: string;
  Img3: string;

  constructor(private authenticationService: AuthenticationService) {
    this.Img1 = '../../assets/images/001.jpg';
    this.Img2 = '../../assets/images/001.jpg';
    this.Img3 = '../../assets/images/001.jpg';
  }

  ngOnInit() {
  }

  get user(): any {
    return localStorage.getItem('currentUser');
  }

  logOut() {
    this.loading = true;
    this.authenticationService.logout()
    console.log("Log Out")
  }

}
