import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  ImgLogo: string;
  ImgLogin: string;
  model: any = {};
  loading = false;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgLogin = '../../assets/images/login.jpg';
  }

  ngOnInit() {
    this.getUsers();
  };

  getUsers(){
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  clickLogin() {
    console.log(this.users);
    console.log(this.model.firstName);
    console.log(this.model.password);
    this.loading = true;
    alert("Username or Password is incorrect");
  }
}
