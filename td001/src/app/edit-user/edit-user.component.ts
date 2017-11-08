import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/User.service";
import {FileUploader} from "ng2-file-upload";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

const URL = 'http://localhost:8080/';
//const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  getUserId: any;
  userId: any;
  @ViewChild('fileInput') fileInput;

  constructor(private userService: UserService,
              private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getUserId = this.currentUser.id;
    console.log(this.getUserId);
  }

  ngOnInit() {
    this.getUserList();
    this.getUserId = this.currentUser.id;
    console.log(this.getUserId);

  }

  public upload() {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('files', fileBrowser.files[0]);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', URL + 'add/ImageUser' + "?userId=" + this.getUserId, true);
      xhr.onload = function () {
        if (this['status'] === 200) {
          const responseText = this['responseText'];
          const files = JSON.parse(responseText);
          location.reload();
          //todo: emit event
        } else {
          //todo: error handling
        }
      };
      xhr.send(formData);
    }
  }

  public uploaderImageUser: FileUploader = new FileUploader({url: URL + 'add/ImageUser/' + "?userId=" + this.getUserId});


  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  public DeleteImage(id) {
    console.log(id);
    this.userId = this.currentUser.id;
    console.log(this.userId);
    this.userService.deleteImage(id, this.userId).subscribe(
      data => {
        //alert("Delete Image Success");
        location.reload();
      },
      error => {
        alert("Error")
      });
  }

}
