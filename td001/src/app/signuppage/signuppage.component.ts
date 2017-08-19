import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css'],
  moduleId: module.id
})

export class SignuppageComponent implements OnInit {
  User: any = {};
  loading = false;
  ImgSignUp: string;
  ImgLogo: string;

  constructor(private router: Router,
              private userService: UserService) {
    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgSignUp = '../../assets/images/signUp.jpg';
  }

  clickSignUp() {
    this.loading = true;
    console.log(this.User);

    this.userService.createUsers(this.User)
      .subscribe(
        data => {
          this.router.navigate(['/register']);
        },
        error => {
          this.loading = false;
        });
  }

  ngOnInit() {
  }

}
