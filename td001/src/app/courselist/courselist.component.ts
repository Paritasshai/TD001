import {Component, OnInit} from '@angular/core';
import {Course} from "../models/Course";
import {CourseService} from "../services/CourseService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  Img1: string;
  courses: Course[] = [];

  constructor(private courseService: CourseService,
              private router: Router) {
    this.Img1 = '../../assets/images/001.jpg';
  }

  ngOnInit() {
    this.getCourseList();
  }

  private getCourseList() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  click(id) {
    this.router.navigate(['/CourseLists', id]);
  }

}
