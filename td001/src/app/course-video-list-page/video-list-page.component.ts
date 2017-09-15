import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {FileUploader} from 'ng2-file-upload';
import {CourseService} from "../services/CourseService";
import {AlertService} from "../alertContent/AlertService";
import {Router} from "@angular/router";
import {User} from "../models/User";

// const URL = '/api/';
const URL = 'http://localhost:8080/add/video';

@Component({
  selector: 'app-video-list-page',
  templateUrl: './video-list-page.component.html',
  styleUrls: ['./video-list-page.component.css']
})
export class VideoListPageComponent implements OnInit {
  Course: any = {};
  currentUser: User;

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(public http: Http,
              private courseService: CourseService,
              private alertService: AlertService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  upLoad(id) {
    console.log(id);
    this.courseService.createCourse(id, this.Course)
      .subscribe(
        data => {
          this.alertService.success('Upload Successful', true);
          this.router.navigate(['/EditCourse']);
        },
        error => {
          this.alertService.error('Upload Failed', true);
        });
  }
}
