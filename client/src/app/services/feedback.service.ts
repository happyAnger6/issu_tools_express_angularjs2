import { Injectable } from '@angular/core';
import {DeliverFeedback} from "../models/deliverFeedback";
import {DELIVERFEEDBACKS} from "../mocks/deliverFeedbacks";

@Injectable()
export class FeedbackService {

  constructor() { }

  getFeedbacks(): DeliverFeedback[] {
    var arys: DeliverFeedback[] = [];
    for (const deliver of DELIVERFEEDBACKS) {
      if( deliver.id < 4) {
        arys.push(deliver);
      }
    }
    return arys;
  }

}
