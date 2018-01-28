import { Injectable } from '@angular/core';

import { Branch } from '../models/branch';

import { BRANCHS } from '../mocks/branchs';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {API_BRANCH_URI, API_URI} from "../shared/http";

import { Base64 } from 'js-base64';

@Injectable()
export class BranchService {

  constructor(private userService: UserService,
              private httpClient: HttpClient) { }

  getFeedbackBranchs(fn) {
   const user = this.userService.getCurUser();
   if (!user) {
     return fn(null);
   }
   this.httpClient.get<Branch[]>(API_BRANCH_URI + 'json',
     { headers: new HttpHeaders().set('Authorization', 'basic ' +  Base64.encode(user.Name + ':' + user.Passwd))})
     .subscribe(data => {
          fn(data);
     });
  }

  delBranch(name: string, fn) {
    const user = this.userService.getCurUser();
    if (!user) {
      return fn(null);
    }
    this.httpClient.post(API_BRANCH_URI + name + '/delete', null,
      { headers: new HttpHeaders().set('Authorization', 'basic ' +  Base64.encode(user.Name + ':' + user.Passwd))})
      .subscribe(data => {
        fn(data);
      });
  }

  addBranch(branch: Branch, fn) {
    const user = this.userService.getCurUser();
    if (!user) {
      return fn(null);
    }
    this.httpClient.post(API_BRANCH_URI + name + '/create', branch,
      { headers: new HttpHeaders().set('Authorization', 'basic ' +  Base64.encode(user.Name + ':' + user.Passwd))})
      .subscribe(result => {
        fn(result);
      });
  }

}
