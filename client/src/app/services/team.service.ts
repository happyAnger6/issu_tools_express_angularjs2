import { Injectable } from '@angular/core';

import { Team } from '../models/team';
import { TEAMS } from '../mocks/teams';
import { UserModules } from '../models/userModules';
import { USER_MODULES } from '../mocks/userModules';
import {UserModulesDetails} from "../models/userModulesDetails";
import {USER_MODULES_DETAILS} from "../mocks/userModulesDetails";

@Injectable()
export class TeamService {

  constructor() { }

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
