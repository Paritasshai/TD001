import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/User.service";
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  id = "2";
  userId: any;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getUserList();
    console.log(this.id);
  }

  public uploaderImageUser: FileUploader = new FileUploader({url: 'http://103.76.180.120:8080/tamdai-service/add/ImageUser/' + "?userId=" + this.id});
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
