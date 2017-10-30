import {Component, OnInit} from '@angular/core';
import {Course} from "../models/Course";
import {CourseService} from "../services/CourseService";
import {Router} from "@angular/router";
import {User} from "../models/User";
import {UserService} from "../services/User.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  Img1: string;
  courses: any = [];
  coursesNew: any = [];
  coursesRecommend: any = [];
  coursesHot: any = [];
  instructor = "instructor";
  currentUser: User;
  users: User[] = [];
  textTrue = "true";
  textNull = "null";
  textFalse = 'false';
  textPublic = 'true';
  active = "active";
  newType = "new";
  recommendType = "recommend";
  hotType = "hot";
  query: any;
  // Mindstrom = "Mindstrom";
  // Household = "Household";
  // Toy = "Toy";
  // Garden = "Garden";
  // IOT = "IOT";

  constructor(private courseService: CourseService,
              private router: Router,
              private userService: UserService) {
    this.Img1 = '../../assets/images/001.jpg';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (this.courses != undefined) {
      this.getCourseList();
    }
    if (this.currentUser != undefined) {
      this.getUserList();
    }
    this.getCourseNewType();
    this.getCourseRecommendType();
    this.getCourseHotType();
  }

  // private getCourseList() {
  //   this.courseService.getCourses().subscribe(courses => {
  //     this.courses = courses;
  //     console.log(this.courses);
  //   });
  // }

  // searchCata(Mindstrom, Household, Toy, Garden, IOT) {
  //   // console.log(Mindstrom);
  //   // console.log(Household);
  //   // console.log(Toy);
  //   // console.log(Garden);
  //   // console.log(IOT);
  //   if (Mindstrom != undefined) {
  //     console.log(Mindstrom);
  //   } else if (Household != undefined) {
  //     console.log(Household);
  //   } else if (Toy != undefined) {
  //     console.log(Toy);
  //   } else if (Garden != undefined) {
  //     console.log(Garden);
  //   } else {
  //     console.log(IOT);
  //   }
  // }

  private getCourseList() {
    this.courseService.getCourseItemsByPublic(this.textPublic).subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  private getCourseNewType() {
    this.courseService.getCoursenewType(this.newType, this.textPublic).subscribe(coursesNew => {
      this.coursesNew = coursesNew;
      console.log(this.coursesNew);
    });
  }

  private getCourseRecommendType() {
    this.courseService.getCourseRecommendType(this.recommendType, this.textPublic).subscribe(coursesRecommend => {
      this.coursesRecommend = coursesRecommend;
      console.log(this.coursesRecommend);
    });
  }

  private getCourseHotType() {
    this.courseService.getCourseHotType(this.hotType, this.textPublic).subscribe(coursesHot => {
      this.coursesHot = coursesHot;
      console.log(this.coursesHot);
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
