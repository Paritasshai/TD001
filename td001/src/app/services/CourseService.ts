import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Course} from "../models/Course";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CourseService {

  constructor(private http: Http) {
  }

  createCourse(id, course: Course) {
    return this.http.post('http://localhost:8080/add/courseDetail/' + "?userId=" + id, course).map((response: Response) => response.json());
  }

  getCourses(): Observable<Course[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/get/courseDetail', options)
      .map((response: Response) => response.json());
  }

  getCoursesById(id): Observable<Course[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/course/' + id, options)
      .map((response: Response) => response.json());
  }

  updateCourse(id, name, description, price, course: Course) {
    return this.http.put('http://localhost:8080/update/course/' + id + "?name=" + name + "&" + "description=" + description + "&" + "price=" + price, course).map((response: Response) => response.json());
  }

}

