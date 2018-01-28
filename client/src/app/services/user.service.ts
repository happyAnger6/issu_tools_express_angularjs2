import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { USERS } from '../mocks/users';
import {TeamCount} from '../models/teamCount';
import {TEAM_USERS} from '../mocks/teamUsers';
import {TEAM_COUNTS} from '../mocks/teamCounts';
import {TeamUser} from '../models/teamUser';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Base64 } from 'js-base64';
import {Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {API_USERS_URI} from "../shared/http";

@Injectable()
export class UserService {
  currUser: User;
  isLogin: boolean;
  constructor(private route: Router,
              private httpClient: HttpClient,
              private authInfo: AuthService) { this.isLogin = false; }

  getCurUser(): User {
    return this.currUser;
  }

  getAuthHeader() {
    if (this.isLogin && this.currUser) {
      return 'basic ' + Base64.encode(this.currUser.Name + ':' + this.currUser.Passwd);
    }
    return null;
  }

  login(name: string, passwd: string): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/api/users/' + name + '/json',
      { headers: new HttpHeaders().set('Authorization', 'basic ' +  Base64.encode(name + ':' + passwd))});
  }

  setUser(user: User) {
    this.currUser = user;
    this.isLogin = true;
  }

  logout() {
    this.currUser = null;
    this.isLogin = false;
    this.authInfo.setUser(null);
    this.route.navigateByUrl('/admin/login');
  }

  addUser(user: User) {
  }

  // 获取某个组件的用户信息
  getUsersInfoByTeam(team: string, fn) {
    this.httpClient.get<User[]>(API_USERS_URI + 'json?team=' + team)
      .subscribe(result => {
          fn(null, result);
        },
        err => {
          fn(err, null);
        });
  }

  // 获取各个组件的用户数
  getAllUsers(fn) {
    this.httpClient.get<User[]>(API_USERS_URI + 'json')
      .subscribe(result => {
        fn(null, result);
      },
        err => {
       fn(err, null);
        });
  }
}
