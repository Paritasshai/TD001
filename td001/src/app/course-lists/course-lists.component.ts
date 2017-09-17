import {Component, OnInit} from '@angular/core';
import {CourseService} from "../services/CourseService";
import {ActivatedRoute} from "@angular/router";
import {Video} from "../models/Video";

@Component({
  selector: 'app-course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.css']
})
export class CourseListsComponent implements OnInit {
  videoSource: string;
  ImgUser: string;
  ImgCourse: string;
  courses: any = [];
  // courseId: any;
  // videos: Video[] = [];

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,) {
    let id = this.route.snapshot.params['id'];
    //console.log(id);
    this.videoSource = 'http://localhost:8080/playVideo/' + id;
    this.ImgUser = '../../assets/images/002.jpg';
    this.ImgCourse = '../../assets/images/001.jpg';
  }

  ngOnInit() {
    // this.courseId = this.courses.id;
    this.getCoursesById();
    // this.getVideoList();
  }

  private getCoursesById() {
    this.courseService.getCoursesById(this.route.snapshot.params['id']).subscribe(courses => {
      this.courses = courses;
      //console.log(this.courses);
    });
  }

  // private getVideoList() {
  //   this.courseService.getVideoList().subscribe(videos => {
  //     this.videos = videos;
  //     //console.log(this.courses);
  //   });
  // }

}
