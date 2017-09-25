import {Component, OnInit} from '@angular/core';
import {Course} from "../models/Course";
import {CourseService} from "../services/CourseService";
import {Router} from "@angular/router";
import {User} from "../models/User";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  courses: Course[] = [];
  currentUser: User;
  users: User[] = [];
  userId: any;

  constructor(private courseService: CourseService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(this.currentUser.id);
    //this.id = this.currentUser.id;
  }

  ngOnInit() {
    this.getCourseList();
    // this.getUserList();
  }

  private getCourseList() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  // private getUserList() {
  //   this.userService.getAll().subscribe(users => {
  //     this.users = users[this.currentUser.id].courses;
  //   });
  // }

  EditCourse(id) {
    console.log("Edit");
    this.router.navigate(['/EditCourse', id])
  }

  DeleteCourse(id) {
    console.log(id);
    this.courseService.DeleteCourse(id).subscribe(
      data => {
        alert("Success");
        location.reload();
      },
      error => {
        alert("Error");
      });
  }

}
