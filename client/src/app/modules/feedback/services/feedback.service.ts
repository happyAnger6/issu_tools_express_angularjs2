import { Injectable } from '@angular/core';

import { DeliverFeedback } from '../../../models/deliverFeedback';
import { DELIVERFEEDBACKS } from '../../../mocks/deliverFeedbacks';

@Injectable()
export class FeedbackService {

  constructor() { }

  getDeliverFeedbacks(): DeliverFeedback[] {
    return DELIVERFEEDBACKS;
  }
}
