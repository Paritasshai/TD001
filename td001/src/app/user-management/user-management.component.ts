import {Component, OnInit} from '@angular/core';
import {User} from "../models/User";
import {UserService} from "../services/User.service";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  SelectedValue: string = null;
  statusName: any;
  User: any = {};

  categories: any[] = [
    {id: 1, status: 'active'},
    {id: 2, status: 'instructor'},
    {id: 3, status: 'lock'},
    {id: 4, status: 'inactive'},
    {id: 5, status: 'admin'}
  ];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    if (this.users != undefined) {
      this.getUserList();
    }
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
      this.users.sort(function (id1, id2) {
        if (id1.id < id2.id) {
          return -1;
        } else if (id1.id > id2.id) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  }

  getValueFromSelect(id) {
    // console.log(this.SelectedValue);
    // console.log(id);

    this.statusName = this.SelectedValue;
    this.userService.updateUserStatus(id, this.statusName, this.User).subscribe(
      data => {
        alert("Success");
        location.reload();
      },
      error => {
        alert("Error")
      });

  }


}
