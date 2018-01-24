import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from '../../../../../models/team';
import { TeamService } from '../../../../../services/team.service';
import { UserModulesDetails } from '../../../../../models/userModulesDetails';

@Component({
  selector: 'app-user-modules-info',
  templateUrl: './user-modules-info.component.html',
  styleUrls: ['./user-modules-info.component.css']
})

export class UserModulesInfoComponent implements OnInit {

  @Output() evSelectModule = new EventEmitter<UserModulesDetails>();
  private _team: Team;
  userModulesDetails: UserModulesDetails[];
  selectedModule: UserModulesDetails;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.userModulesDetails = this.teamService.getAllUserModulesByTeam(this._team.name);
  }

  @Input()
  set team(team: Team) {
    this._team  = team;
    this.userModulesDetails = this.teamService.getAllUserModulesByTeam(this._team.name);
  }

  get team(): Team {
    return this._team;
  }

  onSelectModule(userModule: UserModulesDetails) {
    this.evSelectModule.emit(userModule);
    this.selectedModule = userModule;
  }
}
