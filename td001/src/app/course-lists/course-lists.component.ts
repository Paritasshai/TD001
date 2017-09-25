import {Component, OnInit} from '@angular/core';
import {CourseService} from "../services/CourseService";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/User.service";
import {User} from "../models/User";
import {PurchaseCourseService} from "../services/PurchaseCourseService";

@Component({
  selector: 'app-course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.css']
})
export class CourseListsComponent implements OnInit {
  courses: any = [];
  image = "image";
  video = "video";
  truePreview = "true";
  statusInstructor = "instructor";
  users: User[] = [];
  currentUser: User;
  userId: any;
  purchaseCart: any = {};
  carts: any = [];

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private purchaseCourseService: PurchaseCourseService) {
    let id = this.route.snapshot.params['id'];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getCoursesById();
    this.getCarts();
    this.getUserList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  getCoursesById() {
    this.courseService.getCoursesById(this.route.snapshot.params['id']).subscribe(courses => {
      this.courses = courses;
    });
  }

  getCarts() {
    this.purchaseCourseService.getCarts().subscribe(carts => {
      this.carts = carts;
    });
  }

  EditItem(id) {
    console.log(id);
    this.router.navigate(['/addItem', id]);
  }

  buyCourse(id) {
    this.userId = this.currentUser.id;
    this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart).subscribe(
      data => {
        alert("Success");
      },
      error => {
        alert("Failed");
      });
  }

}
