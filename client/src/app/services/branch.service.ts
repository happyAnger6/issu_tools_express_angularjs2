import { Injectable } from '@angular/core';

import { Branch } from '../models/branch';

import { BRANCHS } from '../mocks/branchs';

@Injectable()
export class BranchService {

  constructor() { }

  getFeedbackBranchs(): Branch[] {
    return BRANCHS;
  }
}
