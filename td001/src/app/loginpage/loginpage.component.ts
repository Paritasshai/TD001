import {Component, OnInit} from '@angular/core';
import {MemberService} from '../services/member.service';
import {Member} from '../models/member';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  ImgLogo: string;
  ImgLogin: string;
  username: string;
  password: string;
  members: Member[];

  constructor(private memberService: MemberService, private router: Router) {
    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgLogin = '../../assets/images/login.jpg';
  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.members = this.memberService.getMembers();
    console.log(this.members);
  }

  clickLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.username === this.members[length].firstName && this.password === this.members[length].password) {
      alert('Success');
      this.router.navigate(['course']);
    }
  }

}
