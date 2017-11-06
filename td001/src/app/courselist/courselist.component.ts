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
  coursesLego: any = [];
  coursesHousehold: any = [];
  coursesToy: any = [];
  coursesGarden: any = [];
  coursesIoT: any = [];
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
  LegoText = "Lego";
  HouseholdText = "Household";
  ToyText = "Toy";
  GardenText = "Garden";
  IoTText = "IoT";
  query: any;
  myVar = true;
  lego = false;
  household = false;
  toy = false;
  garden = false;
  iot = false;
  querySearch = false;
  empty = "";
  courseSearch: any = [];

  constructor(private courseService: CourseService,
              private router: Router,
              private userService: UserService) {
    this.Img1 = '../../assets/images/001.jpg';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.clear();
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

  public searchItem(query) {
    this.myVar = false;
    this.lego = false;
    this.household = false;
    this.toy = false;
    this.garden = false;
    this.iot = false;
    this.querySearch = true;
    console.log(query);
    this.courseService.getSearchByName(query, this.textPublic).subscribe(courseSearch => {
      this.courseSearch = courseSearch;
    });
  }

  public All() {
    this.myVar = true;
    this.lego = false;
    this.household = false;
    this.toy = false;
    this.garden = false;
    this.iot = false;
    this.querySearch = false;
  }

  public Lego() {
    this.myVar = false;
    this.lego = true;
    this.household = false;
    this.toy = false;
    this.garden = false;
    this.iot = false;
    this.querySearch = false;
    console.log("Lego");
    this.courseService.getCourseItemsByLegoPublic(this.LegoText, this.textPublic).subscribe(coursesLego => {
      this.coursesLego = coursesLego;
    });
  }

  public Household() {
    this.myVar = false;
    this.lego = false;
    this.household = true;
    this.toy = false;
    this.garden = false;
    this.iot = false;
    this.querySearch = false;
    console.log("Household");
    this.courseService.getCourseItemsByHouseholdPublic(this.HouseholdText, this.textPublic).subscribe(coursesHousehold => {
      this.coursesHousehold = coursesHousehold;
    });
  }

  public Toy() {
    this.myVar = false;
    this.lego = false;
    this.household = false;
    this.toy = true;
    this.garden = false;
    this.iot = false;
    this.querySearch = false;
    console.log("Toy");
    this.courseService.getCourseItemsByToyPublic(this.ToyText, this.textPublic).subscribe(coursesToy => {
      this.coursesToy = coursesToy;
    });
  }

  public Garden() {
    this.myVar = false;
    this.lego = false;
    this.household = false;
    this.toy = false;
    this.garden = true;
    this.iot = false;
    this.querySearch = false;
    console.log("Garden");
    this.courseService.getCourseItemsByGardenPublic(this.GardenText, this.textPublic).subscribe(coursesGarden => {
      this.coursesGarden = coursesGarden;
    });
  }

  public IoT() {
    this.myVar = false;
    this.lego = false;
    this.household = false;
    this.toy = false;
    this.garden = false;
    this.iot = true;
    this.querySearch = false;
    console.log("IoT");
    this.courseService.getCourseItemsByIoTPublic(this.IoTText, this.textPublic).subscribe(coursesIoT => {
      this.coursesIoT = coursesIoT;
    });
  }


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
