import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import {TeamCount} from '../../../../models/teamCount';
import {TeamUser} from '../../../../models/teamUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public teamCounts: TeamCount[];
  public teamUsers: TeamUser[];
  public selectedTeam: string;
  public selectedUser: TeamUser;
  public addUser: TeamUser = new TeamUser("", "", "", "None");
  public oper: number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.teamCounts = this.userService.getAllTeamCount();
  }

  onInitEnv() {
    this.oper = 0;
    this.selectedUser = null;
  }

  onSelectTeam(team: string) {
    this.onInitEnv();
    this.selectedTeam = team;
    this.teamUsers = this.userService.getUsersInfoByTeam(team);
  }

  onSelectUser(user: TeamUser) {
    this.selectedUser = user;
    this.oper = 0;
  }

  onSelectAddUser() {
    this.oper = 1;
    this.selectedUser = null;
  }

  onSelectDelUser(name: string) {
    this.oper = 2;
  }

  onAddUser() {
    this.addUser.team = this.selectedTeam;
    console.log("add user: ", this.addUser);
  }

  setTeamClass(team: TeamCount) {
    if (team.name === this.selectedTeam) {
      return "btn btn-danger";
    }
    return "btn btn-info";
  }
}
