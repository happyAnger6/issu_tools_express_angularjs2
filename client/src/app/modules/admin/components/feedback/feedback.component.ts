import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../../services/team.service';
import { Team } from '../../../../models/team';
import {DeliverFeedback} from "../../../../models/deliverFeedback";
import {FeedbackService} from "../../../../services/feedback.service";
import {UserModulesDetails} from "../../../../models/userModulesDetails";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  allTeams: Team[];
  selectedTeam: Team;
  selectedModule: UserModulesDetails;
  delivers: DeliverFeedback[];

  constructor(private teamService: TeamService,
              private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.allTeams = this.teamService.getAllTeamsInfo();
  }

  onSelectedTeam(team: Team) {
    this.selectedTeam = team;
    this.selectedModule = null; //clear these data when change a team
    this.delivers = null;
  }

  onSelectedModule(module: UserModulesDetails) {
    this.selectedModule = module;
    this.delivers = this.feedbackService.getFeedbacks();
  }

}
