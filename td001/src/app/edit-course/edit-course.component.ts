import {Component, OnInit} from '@angular/core';
import {Course} from "../models/Course";
import {CourseService} from "../services/CourseService";
import {Router} from "@angular/router";
import {User} from "../models/User";
import {UserService} from "../services/User.service";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courses: Course[] = [];
  currentUser: User;
  users: User[] = [];

  constructor(private courseService: CourseService,
              private router: Router,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getCourseList();
    this.getUserList();
  }

  private getCourseList() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users[0].courses;
    });
  }

  EditCourse(id) {
    console.log("Edit");
    this.router.navigate(['/EditCourse', id])
  }

}
