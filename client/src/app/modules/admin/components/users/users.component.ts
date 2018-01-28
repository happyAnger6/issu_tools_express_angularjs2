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
  public addUser: TeamUser = new TeamUser('', '', '', 'None');
  public oper: number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    const comp = this;
    this.userService.getAllUsers(function(err, users){
      if (!err) {
        const _teamCount: TeamCount[] = [];
        for ( const user of users ) {
          let flag = 0;
          for (const teamCount of _teamCount) {
            if (teamCount.name === user.Team) {
              teamCount.userNum++;
              flag = 1;
              break;
            }
          }
          if ( 0 === flag) {
            _teamCount.push(new TeamCount(user.Team, 1));
          }
        }
        comp.teamCounts = _teamCount;
      }
    });
  }

  onInitEnv() {
    this.oper = 0;
    this.selectedUser = null;
  }

  onSelectTeam(team: string) {
    this.onInitEnv();
    this.selectedTeam = team;
    const comp = this;
    this.userService.getUsersInfoByTeam(team, function(err, users) {
     if (!err) {
       comp.teamUsers = users;
     }
    });
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
    this.addUser.Team = this.selectedTeam;
    console.log('add user: ', this.addUser);
  }

  setTeamClass(team: TeamCount) {
    if (team.name === this.selectedTeam) {
      return 'btn btn-danger';
    }
    return 'btn btn-info';
  }
}
