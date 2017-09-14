import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Video} from "../models/Video";

@Injectable()
export class VideoService {

  constructor(private http: Http) {
  }

  createVideos(video: Video) {
    return this.http.post('http://localhost:8080/add/videoDetail', video).map((response: Response) => response.json());
  }

}

