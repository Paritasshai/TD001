import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  Img1: string;
  Img2: string;
  Img3: string;

  constructor() {
    this.Img1 = '../../assets/images/001.jpg';
    this.Img2 = '../../assets/images/001.jpg';
    this.Img3 = '../../assets/images/001.jpg';
  }

  ngOnInit() {
  }

}
