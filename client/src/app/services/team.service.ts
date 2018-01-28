import { Injectable } from '@angular/core';

import { Team } from '../models/team';
import { TEAMS } from '../mocks/teams';
import { UserModules } from '../models/userModules';
import { USER_MODULES } from '../mocks/userModules';
import {UserModulesDetails} from '../models/userModulesDetails';
import {USER_MODULES_DETAILS} from '../mocks/userModulesDetails';
import {UserService} from './user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_TEAM_URI} from '../shared/http';

import { Base64 } from 'js-base64';
import {Http, Headers} from '@angular/http';

@Injectable()
export class TeamService {

  constructor(private userService: UserService,
              private httpClient: HttpClient,
              ) { }

  getAllTeams(fn) {
    const user = this.userService.getCurUser();
    if (!user) {
      return fn(null);
    }
    this.httpClient.get<Team[]>(API_TEAM_URI + 'json')
      .subscribe(
        data => {
        fn(data);
      },
        err => {
          console.log('err: ', err);
        });
  }

  addTeam(team: Team, fn) {
    const user = this.userService.getCurUser();
    if (!user) {
      return fn(null);
    }
    this.httpClient.post(API_TEAM_URI + 'create', team)
      .subscribe(result => {
        fn(result);
      },
      err => {
        fn(err);
      });
  }

  delTeam(name: string, fn) {
    const user = this.userService.getCurUser();
    if (!user) {
      return fn(null);
    }
    this.httpClient.post(API_TEAM_URI + name + '/delete', null)
      .subscribe(result => {
          fn(result);
        },
        err => {
          fn(err);
        });
  }

  getAllTeamsInfo(): Team[] {
    return TEAMS;
  }

  getAllUsersByTeam(team: string): UserModules[] {
    var arys: UserModules[] = [];
    for (const user of USER_MODULES) {
     if (user.team === team) {
        arys.push(user)
     }
    }
    return arys;
  }

  getAllUserModulesByTeam(team: string): UserModulesDetails[] {
    var arys: UserModulesDetails[] = [];
    for (const user of USER_MODULES_DETAILS) {
      if (user.team === team) {
        arys.push(user)
      }
    }
    return arys;
  }
}
