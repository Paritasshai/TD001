import {Component, OnInit} from '@angular/core';
import {CourseService} from "../services/CourseService";
import {ActivatedRoute, Router} from "@angular/router";

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
  image = "image";
  video = "video";

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
    let id = this.route.snapshot.params['id'];
    this.videoSource = 'http://localhost:8080/playVideo/' + id;
    this.ImgUser = '../../assets/images/002.jpg';
    this.ImgCourse = '../../assets/images/001.jpg';
  }

  ngOnInit() {
    this.getCoursesById();
  }

  private getCoursesById() {
    this.courseService.getCoursesById(this.route.snapshot.params['id']).subscribe(courses => {
      this.courses = courses;
    });
  }

}
