import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ImgLogo: string;

  constructor() {
    this.ImgLogo = '../../assets/images/logo.png';
  }

  ngOnInit() {
  }

}
