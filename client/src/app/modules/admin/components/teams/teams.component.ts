import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../../services/team.service';
import { Team } from '../../../../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public teams: Team[];
  public addTeam: Team = new Team('', '');
  public oper = 0;
  public errMsg = '';
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    const comp = this;
    this.teamService.getAllTeams(function(result){
      console.log(result, typeof(result));
      comp.teams = result;
    });
  }

  onAddTeam() {
    const comp = this;
    this.teamService.addTeam(this.addTeam, function(result){
      if (result && result.error) {
        comp.errMsg = result.error.errmsg;
      }
    });
  }

  onSelectAddTeam() {
    this.oper = 1;
  }

  deleteTeam(name: string) {
    const comp = this;
    this.teamService.delTeam(name, function(result) {
      if (result && result.error) {
        comp.errMsg = result.error.errmsg;
      }
    });
  }

}
