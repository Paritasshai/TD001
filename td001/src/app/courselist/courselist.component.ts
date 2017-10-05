import {Component, OnInit} from '@angular/core';
import {Course} from "../models/Course";
import {CourseService} from "../services/CourseService";
import {Router} from "@angular/router";
import {User} from "../models/User";
import {UserService} from "../services/User.service";

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  Img1: string;
  courses: Course[] = [];
  instructor = "instructor";
  currentUser: User;
  users: User[] = [];
  textTrue = "true";
  textNull = "null";
  textFalse = 'false';

  constructor(private courseService: CourseService,
              private router: Router,
              private userService: UserService) {
    this.Img1 = '../../assets/images/001.jpg';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (this.courses != undefined) {
      this.getCourseList();
    } else {
      this.getCourseList();
    }

    if (this.currentUser != undefined) {
      this.getUserList();
    }

  }

  private getCourseList() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  click(id) {
    this.router.navigate(['/CourseLists', id]);
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

}
