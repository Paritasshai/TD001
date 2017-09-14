import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.css']
})
export class CourseListsComponent implements OnInit {
  videoSource: string;
  ImgUser: string;

  constructor() {
    this.videoSource = '../../assets/images/a.mp4';
    this.ImgUser = '../../assets/images/002.jpg';
  }

  ngOnInit() {
  }



}
