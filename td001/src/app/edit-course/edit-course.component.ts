import {Component, OnInit} from '@angular/core';
import {Course} from "../models/Course";
import {CourseService} from "../services/CourseService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCourseList();
  }

  private getCourseList() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  EditCourse(id) {
    console.log("Edit");
    this.router.navigate(['/EditCourse', id])
  }

}
