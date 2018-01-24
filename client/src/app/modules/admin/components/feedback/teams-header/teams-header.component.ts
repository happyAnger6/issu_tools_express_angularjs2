import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Team } from '../../../../../models/team';

@Component({
  selector: 'app-teams-header',
  templateUrl: './teams-header.component.html',
  styleUrls: ['./teams-header.component.css']
})
export class TeamsHeaderComponent implements OnInit {

  @Input() allTeams: Team[];
  @Output() evSelectedTeam = new EventEmitter<Team>();
  constructor() { }

  ngOnInit() {
  }

  onSelectTeam(team: Team) {
    this.evSelectedTeam.emit(team);
  }

}
