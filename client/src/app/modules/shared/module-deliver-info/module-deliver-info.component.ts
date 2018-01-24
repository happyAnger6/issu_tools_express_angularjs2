import { Component, Input, OnInit } from '@angular/core';

import { FeedbackService } from '../../feedback/services/feedback.service';
import { DeliverFeedback } from '../../../models/deliverFeedback';

@Component({
  selector: 'app-module-deliver-info',
  templateUrl: './module-deliver-info.component.html',
  styleUrls: ['./module-deliver-info.component.css']
})
export class ModuleDeliverInfoComponent implements OnInit {

  @Input() delivers: DeliverFeedback[];
  selectedDeliver: DeliverFeedback;
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  onSelectDeliver(deliver: DeliverFeedback){
    this.selectedDeliver = deliver;
  }

  addB(id: number): void {
    this.delivers[id-1].b++;
  }

  addX(id: number): void {
    this.delivers[id-1].x++;
  }

  addY(id: number): void {
    this.delivers[id-1].y++;
  }

  addZ(id: number): void {
    this.delivers[id-1].z++;
  }

  subB(id: number): void {
    if(this.delivers[id-1].b>=1)
      this.delivers[id-1].b--;
  }

  subX(id: number): void {
    if(this.delivers[id-1].x>=1)
      this.delivers[id-1].x--;
  }

  subY(id: number): void {
    if(this.delivers[id-1].y>=1)
      this.delivers[id-1].y--;
  }

  subZ(id: number): void {
    if(this.delivers[id-1].z>=1)
      this.delivers[id-1].z--;
  }

}
