import { Injectable } from '@angular/core';
import {Members} from '../loginpage/pages/shared/member-mock';
import {Http} from '@angular/http';

@Injectable()
export class MemberService {
  getMembers() {
    return Members;
  }
  constructor(private http: Http) { }

}
