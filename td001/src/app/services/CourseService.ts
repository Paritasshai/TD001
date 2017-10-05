import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Course} from "../models/Course";
import {Observable} from "rxjs/Observable";
import {Video} from "../models/Video";
import {CourseItem} from "app/models/CourseItem";

@Injectable()
export class CourseService {

  constructor(private http: Http) {
  }

  createCourse(id, course: Course) {
    return this.http.post('http://localhost:8080/create/course/' + "?userId=" + id, course).map((response: Response) => response.json());
  }

  createVideoItem(id, course: Course) {
    return this.http.post('http://localhost:8080/create/courseVideoItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
  }

  createImageItem(id, course: Course) {
    return this.http.post('http://localhost:8080/create/courseImageItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
  }

  updateItemDetails(id, name, description, canPreview, course: Course) {
    return this.http.put('http://localhost:8080/update/ItemDetails/' + id + "?name=" + name + "&" + "description=" + description + "&" + "canPreview=" + canPreview, course).map((response: Response) => response.json());
  }

  getCourses(): Observable<Course[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/getCourseList', options)
      .map((response: Response) => response.json());
  }

  getCourseItems(id): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/courseItem/' + id, options)
      .map((response: Response) => response.json());
  }

  getCoursesById(id): Observable<Course> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/course/' + id, options)
      .map((response: Response) => response.json());
  }

  getCourseItemtemById(id): Observable<Video> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/courseItem/' + id, options)
      .map((response: Response) => response.json());
  }

  updateCourse(id, name, description, price, publicCourse, linkCourse, course: Course) {
    return this.http.put('http://localhost:8080/update/course/' + id + "?name=" + name + "&" + "description=" + description + "&" + "price=" + price + "&" + "publicCourse=" + publicCourse + "&" + "linkCourse=" + linkCourse, course).map((response: Response) => response.json());
  }

  editVideoName(id: any, lessonName: any, video: Video) {
    return this.http.put('http://localhost:8080/edit/videoFileName/' + id + "?lessonName=" + lessonName, video).map((response: Response) => response.json());
  }

  getCourseVideoById(id): Observable<Course[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/playVideo/' + id, options)
      .map((response: Response) => response.json());
  }

  getVideoById(id): Observable<Video[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/playVideo/' + id, options)
      .map((response: Response) => response.json());
  }

  getVideoList(): Observable<Video[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('http://localhost:8080/get/videoList', options)
      .map((response: Response) => response.json());
  }

  deleteImageCourse(id, courseId: any) {
    return this.http.delete('http://localhost:8080/delete/Image/' + "?imageId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  }

  deleteVideoCourse(id, courseId: any) {
    return this.http.delete('http://localhost:8080/delete/Video/' + "?videoId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  }

  DeleteCourse(id) {
    return this.http.delete('http://localhost:8080/deleteCourse/' + id).map((response: Response) => response.json());
  }

}

