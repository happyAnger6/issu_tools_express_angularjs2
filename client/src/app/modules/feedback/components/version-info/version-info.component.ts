import { Component, Input, OnInit } from '@angular/core';
import { Branch } from '../../../../models/branch';
import { BranchService } from '../../../../services/branch.service';

@Component({
  selector: 'app-version-info',
  templateUrl: './version-info.component.html',
  styleUrls: ['./version-info.component.css']
})
export class VersionInfoComponent implements OnInit {
  @Input() feedbackBranchs: Branch[];
  selectedBranch: Branch;

  constructor(private branchService: BranchService) { }

  ngOnInit() {
    this.feedbackBranchs = this.branchService.getFeedbackBranchs();
  }

  onSelect(branch: Branch): void {
    this.selectedBranch = branch;
  }

}
