import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuardService } from '../../services/auth-guard.service';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuardService]}
  ])],
  exports: [RouterModule]
})

export class FeedbackRoutingModule { }
