import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../mocks/users';
import {TeamCount} from '../models/teamCount';
import {TEAM_USERS} from '../mocks/teamUsers';
import {TEAM_COUNTS} from '../mocks/teamCounts';
import {TeamUser} from "../models/teamUser";

@Injectable()
export class UserService {
  currUser: User;
  isLogin: boolean;
  constructor() { this.isLogin = false; }

  getCurUser(): User {
    return this.currUser;
  }

  login(name: string): boolean {
    for (const user in USERS) {
      if (USERS[user].name === name) {
        this.currUser = USERS[user];
        console.log('curr user', this.currUser);
        this.isLogin = true;
        return true;
      }
    }
    return false;
  }

  logout() {
    this.currUser = null;
    this.isLogin = false;
  }

  addUser(user: User) {
    console.log('add user', user);
  }

  //获取某个组件的用户信息
  getUsersInfoByTeam(team: string): TeamUser[] {
    let teamUsers: TeamUser[] = [];
    for ( const user of TEAM_USERS) {
      if (user.team === team) {
        teamUsers.push(user)
      }
    }
    return teamUsers;
  }

  // 获取各个组件的用户数
  getAllTeamCount(): TeamCount[] {
    return TEAM_COUNTS;
  }
}
