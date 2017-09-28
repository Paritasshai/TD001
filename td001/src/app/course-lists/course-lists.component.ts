import {Component, OnInit} from '@angular/core';
import {CourseService} from "../services/CourseService";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/User.service";
import {User} from "../models/User";
import {PurchaseCourseService} from "../services/PurchaseCourseService";
import {isNull} from "util";

@Component({
  selector: 'app-course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.css']
})
export class CourseListsComponent implements OnInit {
  courses: any = [];
  users: any = [];
  image = "image";
  video = "video";
  truePreview = "true";
  statusInstructor = "instructor";
  active = "active";
  admin = "admin";
  // users: User[] = [];
  currentUser: User;
  userId: any;
  purchaseCart: any = {};
  carts: any = [];
  pathId = this.route.snapshot.params['id'];
  userBalance: any;
  coursePrice = 30;
  result: any;
  balance: any;

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

  buyCourse(id, balance) {

    this.userId = this.currentUser.id;
    console.log(id);
    console.log(balance);
    console.log(this.userId);
    console.log(this.coursePrice);

    if (balance <= this.coursePrice) {
      console.log("error");
      alert("Your balance not enough!!")
    } else {

      this.result = balance - this.coursePrice;
      console.log(this.result);
      this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart, this.result, this.coursePrice).subscribe(
        data => {
          alert("Success");
          location.reload();
        },
        error => {
          alert("Failed");
        });
    }

  }

  buyCourseNull() {
    alert("Please SignIn or SignUp !!");
  }

  TeacherHistory(email) {
    console.log(email);
    console.log("Get Teacher History");
  }
}
