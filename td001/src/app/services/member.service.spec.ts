/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemberService } from './member.service';

describe('PageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberService]
    });
  });

  it('should ...', inject([MemberService], (service: MemberService) => {
    expect(service).toBeTruthy();
  }));
});
