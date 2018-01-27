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
    this.branchService.getFeedbackBranchs(function(branchs){
      this.feedbackBranchs = branchs;
    });
  }

  onSelect(branch: Branch): void {
    this.selectedBranch = branch;
  }

}
