import {Component, OnInit} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../services/CourseService";

@Component({
  selector: 'app-add-video-item',
  templateUrl: './add-video-item.component.html',
  styleUrls: ['./add-video-item.component.css']
})
export class AddVideoItemComponent implements OnInit {

  VideoItem: any = {};
  videoItems: any = {};
  Course: any = {};
  course: any = {};
  name: any;
  description: any;
  preview: "canPreview";
  canPreview: any;
  image = "image";
  video = "video";
  textTrue = "true";
  textUndefined = "undefined";
  courses: any = [];
  courseId: any;

  //url = "localhost";
  url = "192.168.1.7";

  constructor(private route: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.getVideoItemId();
  }

  getCoursesById() {
    this.courseService.getCoursesById(this.route.snapshot.params['id']).subscribe(courses => {
      this.courses = courses;
    });
  }

  updateItem(id) {
    //console.log(id);
    //console.log(this.VideoItem);
    this.name = this.Course.name;
    this.description = this.Course.description;
    this.canPreview = this.VideoItem.canPreview;

    this.courseService.updateItemDetails(id, this.name, this.description, this.canPreview, this.course).subscribe(
      data => {
        alert("Update Success");
        location.reload();
      },
      error => {
        alert("Update Failed");
      });
  }

  deleteItemVideo(id) {
    // console.log(id);
    // this.courseId = this.Course.id;
    // console.log(this.courseId);
    // this.courseService.deleteItemVideo(id, this.courseId).subscribe(
    //   data => {
    //     alert("Delete Video Success");
    //     location.reload();
    //   },
    //   error => {
    //     alert("Error")
    //   });
  }

  deleteItemImage(id) {
    // console.log(id);
    // this.courseId = this.Course.id;
    // console.log(this.courseId);
    // this.courseService.deleteItemImage(id, this.courseId).subscribe(
    //   data => {
    //     alert("Delete Video Success");
    //     location.reload();
    //   },
    //   error => {
    //     alert("Error")
    //   });
  }

  public uploader: FileUploader = new FileUploader({url: 'http://' + this.url + ':8080/add/videoItem/' + "?id=" + this.route.snapshot.params['id']});
  public uploaderImage: FileUploader = new FileUploader({url: 'http://' + this.url + ':8080/add/imageItem/' + "?id=" + this.route.snapshot.params['id']});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  private getVideoItemId() {
    this.courseService.getCourseItemtemById(this.route.snapshot.params['id']).subscribe(Course => {
      this.Course = Course;
    });
  }
}
