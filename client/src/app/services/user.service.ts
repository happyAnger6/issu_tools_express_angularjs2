import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../mocks/users';
import {TeamCount} from '../models/teamCount';
import {TEAM_USERS} from '../mocks/teamUsers';
import {TEAM_COUNTS} from '../mocks/teamCounts';
import {TeamUser} from '../models/teamUser';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Base64 } from 'js-base64';

@Injectable()
export class UserService {
  currUser: User;
  isLogin: boolean;
  constructor(private httpClient: HttpClient) { this.isLogin = false; }

  getCurUser(): User {
    return this.currUser;
  }

  login(name: string, passwd: string): boolean {
    console.log(Base64.encode(name + ':' + passwd));
    this.httpClient.get<User>('http://localhost:3000/api/users/' + name + '/json',
      { headers: new HttpHeaders().set('Authorization', Base64.encode(name + ':' + passwd))})
      .subscribe(data => { this.currUser = data; });
    console.log(this.currUser);
    return false;
  }

  logout() {
    this.currUser = null;
    this.isLogin = false;
  }

  addUser(user: User) {
    console.log('add user', user);
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
