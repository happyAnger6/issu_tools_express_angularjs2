import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

import { VersionInfoComponent } from './components/version-info/version-info.component';
import { MyModulesComponent } from './components/my-modules/my-modules.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

import { FeedbackService } from './services/feedback.service';

import { SharedModule } from '../shared/shared.module';
import { FeedbackRoutingModule } from './feedback-routing.module';

@NgModule({
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    SharedModule,
    FeedbackRoutingModule
  ],
  providers: [
    NgbDropdown,
    FeedbackService
  ],
  declarations: [VersionInfoComponent, MyModulesComponent, FeedbackComponent]
})
export class FeedbackModule { }
