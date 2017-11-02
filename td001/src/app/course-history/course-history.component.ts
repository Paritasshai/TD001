import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/User.service";
import {CourseService} from "../services/CourseService";

@Component({
  selector: 'app-course-history',
  templateUrl: './course-history.component.html',
  styleUrls: ['./course-history.component.css']
})
export class CourseHistoryComponent implements OnInit {
  currentUser: User;
  users: any = [];
  userId: any;

  constructor(private userService: UserService,
              private courseService: CourseService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getUserList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  delete(id) {
    this.userId = this.currentUser.id;
    console.log(id);
    console.log(this.userId);
    this.courseService.DeleteUserCourse(id, this.userId).subscribe(
      data => {
        alert("Success");
        location.reload();
      },
      error => {
        alert("Error");
      });
  }

}
