import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { DeliverFeedback } from '../../../../models/deliverFeedback';

import { UserService } from '../../../../services/user.service';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-my-modules',
  templateUrl: './my-modules.component.html',
  styleUrls: ['./my-modules.component.css']
})
export class MyModulesComponent implements OnInit {
  @Input() currUser: User;
  selectedDelivers: DeliverFeedback[];
  selectedModule: string;

  constructor(private userService: UserService,
              private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.currUser = this.userService.getCurUser();
  }

  onSelect(user: string, module: string) {
      this.selectedModule = module;
      this.selectedDelivers =  this.feedbackService.getDeliverFeedbacks();
  }

}
