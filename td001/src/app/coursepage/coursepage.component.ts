import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent implements OnInit {

  Img1: string;
  ImgUser: string;
  videoSource: string;

  constructor() {
    this.Img1 = '../../assets/images/001.jpg';
    this.ImgUser = '../../assets/images/002.jpg';
    this.videoSource = '../../assets/images/a.mp4';
  }

  ngOnInit() {
  }

}
