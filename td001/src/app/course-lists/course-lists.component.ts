import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "../services/CourseService";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/User.service";
import {User} from "../models/User";
import {PurchaseCourseService} from "../services/PurchaseCourseService";
import {isNull} from "util";
import {Http} from "@angular/http";
import * as http from "http";

@Component({
  selector: 'app-course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.css']
})
export class CourseListsComponent implements OnInit {
  jsonp: any;
  courses: any = [];
  coursesList: any = [];
  coursesPurchaseed: any = [];
  users: any = [];
  image = "image";
  video = "video";
  truePreview = "true";
  falsePreivew = "false";
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
  userIdPurchase: any;
  zero = "0";
  one = "1";
  ipObj: any = [];
  textPublic = 'true';

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private purchaseCourseService: PurchaseCourseService,
              private http: Http) {
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

  open() {
    console.log("opennnnnnn");
    // let body = JSON.stringify({"someJsonData": [{ip}]});
    this.http.get('http://192.168.1.7:8080/getClientIp')
      .subscribe(response => {
        this.ipObj = response;
        console.log(this.ipObj);
      });
  }

  ngOnInit() {
    this.getCoursesById();
    //this.getCarts();
    this.getUserList();

    if (this.currentUser != undefined) {
      this.getCoursesByIdPurchased();
    }
    if (this.courses != undefined) {
      this.getCourseList();
    }
    if (this.currentUser != undefined) {
      this.getUserList();
    }

    this.open();

    // // setTimeout(() => {    //<<<---    using ()=> syntax
    // this.ipObj = true;
    // // this.http.get('//api.ipify.org/?format=json')
    // this.http.get('http:// 192.168.1.7:8080/processing')
    //   .subscribe(response => {
    //     this.ipObj = response.json();
    //     // setTimeout(() => {    //<<<---    using ()=> syntax
    //       console.log(this.ipObj);
    //       // this.ipObj = false;
    //     // }, 9000);
    //   });
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  private getCourseList() {
    this.courseService.getCourseItemsByPublic(this.textPublic).subscribe(courses => {
      this.coursesList = courses;
    });
  }

  getCoursesById() {
    this.courseService.getCoursesById(this.route.snapshot.params['id']).subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  getCoursesByIdPurchased() {
    this.userIdPurchase = this.currentUser.id;
    // console.log(this.userIdPurchase);
    this.courseService.getCoursesByIdPurchased(this.route.snapshot.params['id'], this.userIdPurchase).subscribe(coursesPurchaseed => {
      this.coursesPurchaseed = coursesPurchaseed;
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
    //console.log(balance);
    //console.log(price);
    //console.log(name);
    //console.log(this.userId);
    //console.log(this.coursePrice);

    if (balance >= price) {
      this.result = balance - price;
      console.log(this.result);
      return this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart, this.result, price, name).subscribe(
        data => {
          alert("Success");
          location.reload();
        },
        error => {
          alert("Failed");
        });
    } else {
      alert("Your balance not enough!!");
    }

    //  (balance < price) {
    //   alert("Your balance not enough!!")
    // }

    // else if (balance = price) {
    //     this.result = balance - price;
    //     console.log(this.result);
    //     this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart, this.result, price, name).subscribe(
    //       data => {
    //         alert("Success");
    //         location.reload();
    //       },
    //       error => {
    //         alert("Failed");
    //       });
    //   }

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
