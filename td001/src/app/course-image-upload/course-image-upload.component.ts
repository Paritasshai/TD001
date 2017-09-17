import {Component, OnInit} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-image-upload',
  templateUrl: './course-image-upload.component.html',
  styleUrls: ['./course-image-upload.component.css']
})
export class CourseImageUploadComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
  }

  public uploaderImage: FileUploader = new FileUploader({url: 'http://localhost:8080/add/image/' + "?id=" + this.route.snapshot.params['id']});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}
