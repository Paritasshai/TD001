import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {FileUploader} from 'ng2-file-upload';
import {VideoService} from "../services/CourseService";
import {AlertService} from "../alertContent/AlertService";

// const URL = '/api/';
const URL = 'http://localhost:8080/add/video';

@Component({
  selector: 'app-video-list-page',
  templateUrl: './video-list-page.component.html',
  styleUrls: ['./video-list-page.component.css']
})
export class VideoListPageComponent implements OnInit {
  Course: any = {};

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
              private videoService: VideoService,
              private alertService: AlertService) {
  }

  ngOnInit() {
  }

  upLoad() {
    this.videoService.createCourse(this.Course)
      .subscribe(
        data => {
          this.alertService.success('Upload Successful', true);
        },
        error => {
          this.alertService.error('Upload Failed', true);
        });
  }
}
