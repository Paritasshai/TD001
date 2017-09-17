import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../services/CourseService";
import {FileUploader} from "ng2-file-upload";
import {AlertService} from "../alertContent/AlertService";

// const URL = '/api/';
//const URL = 'http://localhost:8080/add/video';

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

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private alertService: AlertService) {
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

  public uploader: FileUploader = new FileUploader({url: 'http://localhost:8080/add/video/' + "?id=" + this.route.snapshot.params['id']});
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

    this.courseService.updateCourse(id, this.name, this.description, this.price, this.Course)
      .subscribe(
        data => {
          this.alertService.success('Upload Successful', true);
        },
        error => {
          this.alertService.error('Upload Failed', true);
        });
  }

}
