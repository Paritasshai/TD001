import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  Img1: string;

  constructor() {
    this.Img1 = '../../assets/images/001.jpg';
  }

  ngOnInit() {
  }

}
