import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {FileUploader} from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'http://localhost:8080/video';

@Component({
  selector: 'app-video-list-page',
  templateUrl: './video-list-page.component.html',
  styleUrls: ['./video-list-page.component.css']
})
export class VideoListPageComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(public http: Http) {
  }

  ngOnInit() {
  }


}
