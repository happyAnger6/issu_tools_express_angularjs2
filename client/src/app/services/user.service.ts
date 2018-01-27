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
import {Router} from "@angular/router";

@Injectable()
export class UserService {
  currUser: User;
  isLogin: boolean;
  constructor(private route: Router,
              private httpClient: HttpClient) { this.isLogin = false; }

  getCurUser(): User {
    return this.currUser;
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
    this.route.navigateByUrl('/admin/login');
  }

  addUser(user: User) {
  }

  // 获取某个组件的用户信息
  getUsersInfoByTeam(team: string): TeamUser[] {
    let teamUsers: TeamUser[] = [];
    for ( const user of TEAM_USERS) {
      if (user.team === team) {
        teamUsers.push(user);
      }
    }
    return teamUsers;
  }

  // 获取各个组件的用户数
  getAllTeamCount(): TeamCount[] {
    return TEAM_COUNTS;
  }
}
