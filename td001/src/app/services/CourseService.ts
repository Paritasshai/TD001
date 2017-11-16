import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Course} from "../models/Course";
import {Observable} from "rxjs/Observable";
import {Video} from "../models/Video";
import {CourseItem} from "app/models/CourseItem";

const URL = 'http://localhost:8080/';

//const URL = 'http://103.76.180.120:8080/tamdai-service/';

@Injectable()
export class CourseService {
  //url = "localhost";
  //url = "192.168.1.7";

  constructor(private http: Http) {
  }

  createCourse(id, course: Course) {
    return this.http.post(URL + 'create/course/' + "?userId=" + id, course).map((response: Response) => response.json());
    //return this.http.post('http://103.76.180.120:8080/tamdai-service/create/course/' + "?userId=" + id, course).map((response: Response) => response.json());
    //return this.http.post('http://' + this.url + ':8080/create/course/' + "?userId=" + id, course).map((response: Response) => response.json());
  }

  createVideoItem(id, course: Course) {
    return this.http.post(URL + 'create/courseVideoItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
    //return this.http.post('http://103.76.180.120:8080/tamdai-service/create/courseVideoItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
    //return this.http.post('http://' + this.url + ':8080/create/courseVideoItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
  }

  createImageItem(id, course: Course) {
    return this.http.post(URL + 'create/courseImageItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
    //return this.http.post('http://103.76.180.120:8080/tamdai-service/create/courseImageItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
    //return this.http.post('http://' + this.url + ':8080/create/courseImageItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
  }

  createTextItem(id, course: Course) {
    return this.http.post(URL + 'create/courseTextItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
    //return this.http.post('http://103.76.180.120:8080/tamdai-service/create/courseImageItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
    //return this.http.post('http://' + this.url + ':8080/create/courseImageItem/' + "?courseId=" + id, course).map((response: Response) => response.json());
  }

  updateItemDetails(id, name, description, canPreview, course: Course, videoPath: any, courseText: any, videoTime: any) {
    return this.http.put(URL + 'update/ItemDetails/' + id + "?name=" + name + "&" + "description=" + description + "&" + "canPreview=" + canPreview + "&" + "videoPath=" + videoPath + "&" + "courseText=" + courseText + "&" + "videoTime=" + videoTime, course).map((response: Response) => response.json());
    //return this.http.put('http://103.76.180.120:8080/tamdai-service/update/ItemDetails/' + id + "?name=" + name + "&" + "description=" + description + "&" + "canPreview=" + canPreview, course).map((response: Response) => response.json());
    //return this.http.put('http://' + this.url + ':8080/update/ItemDetails/' + id + "?name=" + name + "&" + "description=" + description + "&" + "canPreview=" + canPreview + "&" + "videoPath=" + videoPath, course).map((response: Response) => response.json());
  }

  getCourses(): Observable<Course[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCourseList', options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourseList', options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCourseList', options).map((response: Response) => response.json());
  }

  // getCourseItems(id): Observable<CourseItem[]> {
  //   let headers = new Headers({'Authorization': 'Bearer '});
  //   let options = new RequestOptions({headers: headers});
  //
  //   // get users from api
  //   //return this.http.get('http://103.76.180.120:8080/tamdai-service/courseItem/' + id, options).map((response: Response) => response.json());
  //   return this.http.get('http://' + this.url + ':8080/courseItem/' + id, options).map((response: Response) => response.json());
  // }

  getCourseItemsByPublic(textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'courseItemByPublic/' + "?textPublic=" + textPublic, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/courseItemByPublic/' + "?textPublic=" + textPublic, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/courseItemByPublic/' + "?textPublic=" + textPublic, options).map((response: Response) => response.json());
  }

  getCoursenewType(newType: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCoursenewType/' + "?textPublic=" + textPublic + "&" + "newType=" + newType, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCoursenewType/' + "?textPublic=" + textPublic + "&" + "newType=" + newType, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCoursenewType/' + "?textPublic=" + textPublic + "&" + "newType=" + newType, options).map((response: Response) => response.json());
  }

  getCourseRecommendType(recommendType: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCourserecommendType/' + "?textPublic=" + textPublic + "&" + "recommendType=" + recommendType, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourserecommendType/' + "?textPublic=" + textPublic + "&" + "recommendType=" + recommendType, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCourserecommendType/' + "?textPublic=" + textPublic + "&" + "recommendType=" + recommendType, options).map((response: Response) => response.json());
  }

  getCourseHotType(hotType: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCourseHotType/' + "?textPublic=" + textPublic + "&" + "hotType=" + hotType, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourseHotType/' + "?textPublic=" + textPublic + "&" + "hotType=" + hotType, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCourseHotType/' + "?textPublic=" + textPublic + "&" + "hotType=" + hotType, options).map((response: Response) => response.json());
  }

  getSearchByName(query: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourseLego/' + "?textPublic=" + textPublic + "&" + "LegoText=" + LegoText, options).map((response: Response) => response.json());
    return this.http.get(URL + 'getSearchByName/' + "?textPublic=" + textPublic + "&" + "querySearch=" + query, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getSearchByName/' + "?textPublic=" + textPublic + "&" + "querySearch=" + query, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getSearchByName/' + "?textPublic=" + textPublic + "&" + "querySearch=" + query, options).map((response: Response) => response.json());
  }

  getCourseItemsByLegoPublic(LegoText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCourseLego/' + "?textPublic=" + textPublic + "&" + "LegoText=" + LegoText, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourseLego/' + "?textPublic=" + textPublic + "&" + "LegoText=" + LegoText, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCourseLego/' + "?textPublic=" + textPublic + "&" + "LegoText=" + LegoText, options).map((response: Response) => response.json());
  }

  getCourseItemsByHouseholdPublic(HouseholdText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCourseHousehold/' + "?textPublic=" + textPublic + "&" + "HouseholdText=" + HouseholdText, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourseHousehold/' + "?textPublic=" + textPublic + "&" + "HouseholdText=" + HouseholdText, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCourseHousehold/' + "?textPublic=" + textPublic + "&" + "HouseholdText=" + HouseholdText, options).map((response: Response) => response.json());
  }

  getCourseItemsByToyPublic(ToyText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCourseToy/' + "?textPublic=" + textPublic + "&" + "ToyText=" + ToyText, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourseToy/' + "?textPublic=" + textPublic + "&" + "ToyText=" + ToyText, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCourseToy/' + "?textPublic=" + textPublic + "&" + "ToyText=" + ToyText, options).map((response: Response) => response.json());
  }

  getCourseItemsByGardenPublic(GardenText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCourseGarden/' + "?textPublic=" + textPublic + "&" + "GardenText=" + GardenText, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourseGarden/' + "?textPublic=" + textPublic + "&" + "GardenText=" + GardenText, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCourseGarden/' + "?textPublic=" + textPublic + "&" + "GardenText=" + GardenText, options).map((response: Response) => response.json());
  }

  getCourseItemsByIoTPublic(IoTText: any, textPublic: any): Observable<CourseItem[]> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'getCourseIoT/' + "?textPublic=" + textPublic + "&" + "IoTText=" + IoTText, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/getCourseIoT/' + "?textPublic=" + textPublic + "&" + "IoTText=" + IoTText, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/getCourseIoT/' + "?textPublic=" + textPublic + "&" + "IoTText=" + IoTText, options).map((response: Response) => response.json());
  }

  getCoursesById(id): Observable<Course> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'course/' + id, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/course/' + id, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/course/' + id, options).map((response: Response) => response.json());
  }

  getCoursesByIdPurchased(id, userIdPurchase: any): Observable<Course> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'coursePurchased/' + "?userId=" + userIdPurchase + "&" + "courseId=" + id, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/coursePurchased/' + "?userId=" + userIdPurchase+ "&" + "courseId=" + id, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/coursePurchased/' + "?userId=" + userIdPurchase + "&" + "courseId=" + id, options).map((response: Response) => response.json());
  }

  getCourseItemtemById(id): Observable<Video> {
    let headers = new Headers({'Authorization': 'Bearer '});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get(URL + 'courseItem/' + id, options).map((response: Response) => response.json());
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/courseItem/' + id, options).map((response: Response) => response.json());
    //return this.http.get('http://' + this.url + ':8080/courseItem/' + id, options).map((response: Response) => response.json());
  }

  updateCourse(id, name, description, price, publicCourse, linkCourse, course: Course, courseType: any, catagory: any) {
    return this.http.put(URL + 'update/course/' + id + "?name=" + name + "&" + "description=" + description + "&" + "price=" + price + "&" + "publicCourse=" + publicCourse + "&" + "linkCourse=" + linkCourse + "&" + "courseType=" + courseType + "&" + "catagory=" + catagory, course).map((response: Response) => response.json());
    //return this.http.put('http://103.76.180.120:8080/tamdai-service/update/course/' + id + "?name=" + name + "&" + "description=" + description + "&" + "price=" + price + "&" + "publicCourse=" + publicCourse + "&" + "linkCourse=" + linkCourse, course).map((response: Response) => response.json());
    //return this.http.put('http://' + this.url + ':8080/update/course/' + id + "?name=" + name + "&" + "description=" + description + "&" + "price=" + price + "&" + "publicCourse=" + publicCourse + "&" + "linkCourse=" + linkCourse, course).map((response: Response) => response.json());
  }

  editVideoName(id: any, lessonName: any, video: Video) {
    return this.http.put(URL + 'edit/videoFileName/' + id + "?lessonName=" + lessonName, video).map((response: Response) => response.json());
    //return this.http.put('http://103.76.180.120:8080/tamdai-service/edit/videoFileName/' + id + "?lessonName=" + lessonName, video).map((response: Response) => response.json());
    //return this.http.put('http://' + this.url + ':8080/edit/videoFileName/' + id + "?lessonName=" + lessonName, video).map((response: Response) => response.json());
  }

  // getCourseVideoById(id): Observable<Course[]> {
  //   let headers = new Headers({'Authorization': 'Bearer '});
  //   let options = new RequestOptions({headers: headers});
  //
  //   // get users from api
  //   //return this.http.get('http://103.76.180.120:8080/tamdai-service/playVideo/' + id, options).map((response: Response) => response.json());
  //   return this.http.get('http://' + this.url + ':8080/playVideo/' + id, options).map((response: Response) => response.json());
  // }
  //
  // getVideoById(id): Observable<Video[]> {
  //   let headers = new Headers({'Authorization': 'Bearer '});
  //   let options = new RequestOptions({headers: headers});
  //
  //   // get users from api
  //   //return this.http.get('http://103.76.180.120:8080/tamdai-service/playVideo/' + id, options).map((response: Response) => response.json());
  //   return this.http.get('http://' + this.url + ':8080/playVideo/' + id, options).map((response: Response) => response.json());
  // }
  //
  // getVideoList(): Observable<Video[]> {
  //   let headers = new Headers({'Authorization': 'Bearer '});
  //   let options = new RequestOptions({headers: headers});
  //
  //   // get users from api
  //   //return this.http.get('http://103.76.180.120:8080/tamdai-service/get/videoList', options).map((response: Response) => response.json());
  //   return this.http.get('http://' + this.url + ':8080/get/videoList', options).map((response: Response) => response.json());
  // }

  deleteImageCourse(id, courseId: any) {
    return this.http.delete(URL + 'delete/Image/' + "?imageId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
    //return this.http.delete('http://103.76.180.120:8080/tamdai-service/delete/Image/' + "?imageId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
    //return this.http.delete('http://' + this.url + ':8080/delete/Image/' + "?imageId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  }

  deleteVideoCourse(id, courseId: any) {
    return this.http.delete(URL + 'delete/Video/' + "?videoId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
    //return this.http.delete('http://103.76.180.120:8080/tamdai-service/delete/Video/' + "?videoId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
    //return this.http.delete('http://' + this.url + ':8080/delete/Video/' + "?videoId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  }

  DeleteCourse(id) {
    return this.http.delete(URL + 'deleteCourse/' + id).map((response: Response) => response.json());
    //return this.http.delete('http://103.76.180.120:8080/tamdai-service/deleteCourse/' + id).map((response: Response) => response.json());
    //return this.http.delete('http://' + this.url + ':8080/deleteCourse/' + id).map((response: Response) => response.json());
  }

  DeleteUserCourse(id, userId: any) {
    return this.http.delete(URL + 'courseUserDelete/' + "?courseId=" + id + "&" + "userId=" + userId).map((response: Response) => response.json());
    //return this.http.delete('http://103.76.180.120:8080/tamdai-service/courseUserDelete/' + "?courseId=" + id + "&" + "userId=" + userId).map((response: Response) => response.json());
    //return this.http.delete('http://' + this.url + ':8080/courseUserDelete/' + "?courseId=" + id + "&" + "userId=" + userId).map((response: Response) => response.json());
  }

  DeleteItem(id, courseId: any) {
    return this.http.delete(URL + 'deleteItem/' + "?courseItem=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
    //return this.http.delete('http://103.76.180.120:8080/tamdai-service/deleteItem/' + "?courseItem=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
    //return this.http.delete('http://' + this.url + ':8080/deleteItem/' + "?courseItem=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  }

  getTeacherHistory(email: any) {
    return this.http.get(URL + 'user/getTeacherHistory' + "?Email=" + email)
    //return this.http.get('http://103.76.180.120:8080/tamdai-service/user/getTeacherHistory' + "?Email=" + email)
    //return this.http.get('http://' + this.url + ':8080/user/getTeacherHistory' + "?Email=" + email)
  }

  // deleteItemVideo(id,courseId: any) {
  //   return this.http.delete('http://192.168.1.7:8080/deleteItemVideo/' + id + "/" + "?courseId=" + courseId).map((response: Response) => response.json());
  // }
  //
  // deleteItemImage(id, courseId: any) {
  //   return this.http.delete('http://192.168.1.7:8080/deleteItemImage/' + id + "?imageId=" + id + "&" + "courseId=" + courseId).map((response: Response) => response.json());
  // }

}

