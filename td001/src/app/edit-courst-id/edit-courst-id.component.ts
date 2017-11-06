import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../services/CourseService";
import {FileUploader} from "ng2-file-upload";
import {AlertService} from "../alertContent/AlertService";
import {Video} from "../models/Video";

//const URL = 'http://localhost:8080/';
const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Component({
  selector: 'app-edit-courst-id',
  templateUrl: './edit-courst-id.component.html',
  styleUrls: ['./edit-courst-id.component.css']
})
export class EditCourstIdComponent implements OnInit {
  Course: any = {};
  public CourseId;
  name: any;
  description: any;
  price: any;
  courseId: any;
  video: Video;
  course: any = {};
  imageType = "image";
  videoType = "video";
  textTrue = "true";
  publicCourse: any;
  linkCourse: any;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.CourseId = id;
    this.getCourseId(this.CourseId);
  }

  private getCourseId(CourseId) {
    this.courseService.getCoursesById(CourseId).subscribe(courses => {
      this.Course = courses;
    });
  }

  public uploader: FileUploader = new FileUploader({url: URL + 'add/video/' + "?id=" + this.route.snapshot.params['id']});
  public uploaderImage: FileUploader = new FileUploader({url: URL + 'add/ImageCourse/' + "?id=" + this.route.snapshot.params['id']});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  edit(id) {
    // console.log(this.Course.name);
    // console.log(this.Course.description);
    // console.log(this.Course.price);

    this.name = this.Course.name;
    this.description = this.Course.description;
    this.price = this.Course.price;
    this.publicCourse = this.Course.publicCourse;
    console.log(this.publicCourse);
    this.linkCourse = this.Course.linkCourse;
    console.log(this.linkCourse);

    this.courseService.updateCourse(id, this.name, this.description, this.price, this.publicCourse, this.linkCourse, this.Course)
      .subscribe(
        data => {
          this.alertService.success('Edit Successful', true);
        },
        error => {
          this.alertService.error('Edit Failed', true);
        });
  }

  deleteImage(id) {

    this.courseId = this.Course.id;
    this.courseService.deleteImageCourse(id, this.courseId).subscribe(
      data => {
        alert("Delete Image Success");
        location.reload();
      },
      error => {
        alert("Error")
      });
  }

  deleteVideo(id) {
    this.courseId = this.Course.id;
    this.courseService.deleteVideoCourse(id, this.courseId).subscribe(
      data => {
        alert("Delete Video Success");
        location.reload();
      },
      error => {
        alert("Error")
      });
  }

  editVideoName(id, lessonName) {
    console.log(id);
    console.log(lessonName);
    this.courseService.editVideoName(id, lessonName, this.video).subscribe(
      data => {
        alert("Success");
      },
      error => {
        alert("Error");
      }
    )
  }

  CreateVideo() {
    //this.router.navigate(['/addVideoItem', this.route.snapshot.params['id']]);
    this.courseService.createVideoItem(this.route.snapshot.params['id'], this.course).subscribe(
      data => {
        location.reload();
        this.alertService.success('Upload Successful', true);
      },
      error => {
        this.alertService.error('Upload Failed', true);
      });
  }

  CreateImage() {
    //this.router.navigate(['/addVideoItem', this.route.snapshot.params['id']]);
    this.courseService.createImageItem(this.route.snapshot.params['id'], this.course).subscribe(
      data => {
        location.reload();
        this.alertService.success('Upload Successful', true);
      },
      error => {
        this.alertService.error('Upload Failed', true);
      });
  }

  EditItem(id) {
    console.log(id);
    this.router.navigate(['/addItem', id]);
  }

  DeleteItem(id) {
    console.log(id);
    this.courseId = this.Course.id;
    console.log(this.courseId);
    this.courseService.DeleteItem(id, this.courseId).subscribe(
      data => {
        alert("Success");
        location.reload();
      },
      error => {
        alert("Error");
      });
  }

}
