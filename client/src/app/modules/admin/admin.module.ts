import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminMainComponent } from './components/admin-main/admin-main.component';

import { AdminRoutingModule } from './admin-routing.module';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TeamsHeaderComponent } from './components/feedback/teams-header/teams-header.component';
import { UserModulesInfoComponent } from './components/feedback/user-modules-info/user-modules-info.component';
import { SharedModule } from '../shared/shared.module';

import { TeamService } from '../../services/team.service';
import { FeedbackService } from '../../services/feedback.service';
import { PromptService } from '../../services/prompt.service';
import { PromptComponent } from './components/prompt/prompt.component';
import { TopoShowComponent } from './components/topo-show/topo-show.component';
import { BranchService } from '../../services/branch.service';
import { TopoService } from '../../services/topo.service';
import { UsersComponent } from './components/users/users.component';
import {UserService} from '../../services/user.service';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdminRoutingModule,
  ],
  providers: [
   FeedbackService,
   PromptService,
   BranchService,
   TopoService,
  ],
  declarations: [
    AdminMainComponent,
    FeedbackComponent,
    TeamsHeaderComponent,
    UserModulesInfoComponent,
    PromptComponent,
    TopoShowComponent,
    UsersComponent,
    TeamsComponent
  ]
})
export class AdminModule { }
