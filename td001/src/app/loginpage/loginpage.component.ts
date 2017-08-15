import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  ImgLogo: string;
  users = [];

  constructor(private _appService: AppService) {
    this.ImgLogo = '../../assets/images/logo.png';
  }

  ngOnInit() {
    this._appService.getAppService().subscribe(resUserData => this.users = resUserData);
  }

}
