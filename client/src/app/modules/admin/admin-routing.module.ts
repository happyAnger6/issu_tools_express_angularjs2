import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { TopoShowComponent } from './components/topo-show/topo-show.component';
import { UsersComponent } from './components/users/users.component';
import {TeamsComponent} from './components/teams/teams.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminMainComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'feedback',
        component: FeedbackComponent
      },
      { path: 'prompt',
        component: PromptComponent
      },
      { path: 'version',
        component: TopoShowComponent
      },
      { path: 'users',
        component: UsersComponent
      },
      { path: 'teams',
        component: TeamsComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
