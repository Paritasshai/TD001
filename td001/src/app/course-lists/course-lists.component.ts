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
  statusActive = "active";
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
  textNull = "null";
  historyIns: any = [];

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private purchaseCourseService: PurchaseCourseService) {
    let id = this.route.snapshot.params['id'];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

//   this.playerService.getData().subscribe((data) => {
//   this.data = data;
//   for (var i = 0; i <= this.data.length; i++) {
//   if (this.data[i].likes>this.max) {
//   this.max=this.data[i].likes;
//   this.bestPlayer=this.data[i];
// }
// })

  ngOnInit() {
    this.getCoursesById();
    //this.getCarts();
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

  buyCourse(id, balance, price, name) {

    this.userId = this.currentUser.id;
    //console.log(id);
    console.log(balance);
    console.log(price);
    //console.log(name);
    //console.log(this.userId);
    //console.log(this.coursePrice);

    if (balance < price) {
      alert("Your balance not enough!!")
    } else if (balance > price) {
      this.result = balance - price;
      console.log(this.result);
      this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart, this.result, price, name).subscribe(
        data => {
          alert("Success");
          location.reload();
        },
        error => {
          alert("Failed");
        });
    } else {
      alert("error");
    }

  }

  buyCourseNull() {
    alert("Please SignIn or SignUp !!");
  }

  TeacherHistory(email) {
    //console.log(email);
    //console.log("Get Teacher History");
    this.courseService.getTeacherHistory(email)
      .subscribe(historyIns => {
        this.historyIns = historyIns;
        console.log(this.historyIns);
      });
  }
}
