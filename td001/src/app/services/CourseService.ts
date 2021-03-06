import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Course} from "../models/Course";
import {Observable} from "rxjs/Observable";
import {Video} from "../models/Video";
import {CourseItem} from "app/models/CourseItem";
import {AppComponent} from "../app.component";

@Injectable()
export class CourseService {

  constructor(private http: Http) {
  }

  createCourse(id, course: Course) {
    return this.http.post(AppComponent.API_URL + 'create/course/' + "?userId=" + id, course).map((response: Response) => response.json());
  }

  createVideoItem(id, course: Course) {
    return this.http.post(AppComponent.API_URL + 'create/courseVideoItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
  }

  createImageItem(id, course: Course) {
    return this.http.post(AppComponent.API_URL + 'create/courseImageItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
  }

  createTextItem(id, course: Course) {
    return this.http.post(AppComponent.API_URL + 'create/courseTextItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
  }

  updateItemDetails(id, name, description, canPreview, course: Course, videoPath: any, courseText: any, videoTime: any) {
    return this.http.put(AppComponent.API_URL + 'update/ItemDetails/' + id + "?name=" + name + "&" + "description=" + description + "&" + "canPreview=" + canPreview + "&" + "videoPath=" + videoPath + "&" + "courseText=" + courseText + "&" + "videoTime=" + videoTime, course).map((response: Response) => response.json());
  }

  getCourses(): Observable<Course[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCourseList', options).map((response: Response) => response.json());
  }

  getCourseItemsByPublic(textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'courseItemByPublic/' + "?textPublic=" + textPublic, options).map((response: Response) => response.json());
  }

  getCoursenewType(newType: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCoursenewType/' + "?textPublic=" + textPublic + "&" + "newType=" + newType, options).map((response: Response) => response.json());
  }

  getCourseRecommendType(recommendType: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCourserecommendType/' + "?textPublic=" + textPublic + "&" + "recommendType=" + recommendType, options).map((response: Response) => response.json());
  }

  getCourseHotType(hotType: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCourseHotType/' + "?textPublic=" + textPublic + "&" + "hotType=" + hotType, options).map((response: Response) => response.json());
  }

  getSearchByName(query: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getSearchByName/' + "?textPublic=" + textPublic + "&" + "querySearch=" + query, options).map((response: Response) => response.json());
  }

  getCourseItemsByLegoPublic(LegoText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCourseLego/' + "?textPublic=" + textPublic + "&" + "LegoText=" + LegoText, options).map((response: Response) => response.json());
  }

  getCourseItemsByHouseholdPublic(HouseholdText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCourseHousehold/' + "?textPublic=" + textPublic + "&" + "HouseholdText=" + HouseholdText, options).map((response: Response) => response.json());
  }

  getCourseItemsByToyPublic(ToyText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCourseToy/' + "?textPublic=" + textPublic + "&" + "ToyText=" + ToyText, options).map((response: Response) => response.json());
  }

  getCourseItemsByGardenPublic(GardenText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCourseGarden/' + "?textPublic=" + textPublic + "&" + "GardenText=" + GardenText, options).map((response: Response) => response.json());
  }

  getCourseItemsByIoTPublic(IoTText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getCourseIoT/' + "?textPublic=" + textPublic + "&" + "IoTText=" + IoTText, options).map((response: Response) => response.json());
  }

  getCoursesById(id): Observable<Course> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'course/' + id, options).map((response: Response) => response.json());
  }

  getCoursesByIdPurchased(id, userIdPurchase: any): Observable<Course> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'coursePurchased/' + "?userId=" + userIdPurchase + "&" + "courseId=" + id, options).map((response: Response) => response.json());
  }

  getCourseItemtemById(id): Observable<Video> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'courseItem/' + id, options).map((response: Response) => response.json());
  }

  updateCourse(id, name, description, price, publicCourse, linkCourse, course: Course, courseType: any, catagory: any) {
    return this.http.put(AppComponent.API_URL + 'update/course/' + id + "?name=" + name + "&" + "description=" + description + "&" + "price=" + price + "&" + "publicCourse=" + publicCourse + "&" + "linkCourse=" + linkCourse + "&" + "courseType=" + courseType + "&" + "catagory=" + catagory, course).map((response: Response) => response.json());
  }

  editVideoName(id: any, lessonName: any, video: Video) {
    return this.http.put(AppComponent.API_URL + 'edit/videoFileName/' + id + "?lessonName=" + lessonName, video).map((response: Response) => response.json());
  }

  deleteImageCourse(id, courseId: any) {
    return this.http.delete(AppComponent.API_URL + 'delete/Image/' + "?imageId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  }

  deleteVideoCourse(id, courseId: any) {
    return this.http.delete(AppComponent.API_URL + 'delete/Video/' + "?videoId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  }

  DeleteCourse(id) {
    return this.http.delete(AppComponent.API_URL + 'deleteCourse/' + id).map((response: Response) => response.json());
  }

  DeleteUserCourse(id, userId: any) {
    return this.http.delete(AppComponent.API_URL + 'courseUserDelete/' + "?courseId=" + id + "&" + "userId=" + userId).map((response: Response) => response.json());
  }

  DeleteItem(id, courseId: any) {
    return this.http.delete(AppComponent.API_URL + 'deleteItem/' + "?courseItem=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  }

  getTeacherHistory(email: any) {
    return this.http.get(AppComponent.API_URL + 'user/getTeacherHistory' + "?Email=" + email)
  }

}

