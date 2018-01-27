import { Component, ElementRef, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { Network } from 'vis/index-network';
import { DataSet } from 'vis/index-timeline-graph2d';

import { BranchService } from '../../../../services/branch.service';
import {TopoService} from '../../../../services/topo.service';
import {Branch} from '../../../../models/branch';

@Component({
  selector: 'app-topo-show',
  templateUrl: './topo-show.component.html',
  styleUrls: ['./topo-show.component.css']
})

export class TopoShowComponent implements OnInit, AfterViewInit {

  public curNode: any;
  public edit = false;
  public bNums = 0;
  private newBranch = new Branch("", "", [], 0);
  constructor(private branchService: BranchService,
              private topoService: TopoService) { }

  @ViewChild('topoArea')
  topoArea: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
    var canvas = document.getElementById('canvas');
    var topoComp = this;
    this.branchService.getFeedbackBranchs(function(branchs){
      topoComp.bNums = branchs? branchs.length : 0 ;
      topoComp.topoService.initContainer(canvas, 100, 30, 10, 20, 2, topoComp);
      topoComp.topoService.drawNodes(branchs, 0);
    });
  }

  onAddNewBranch() {
    this.branchService.addBranch(this.newBranch, function(result){

    });
  }
  onAddBranch(parent: string) {
    this.edit = true;
  }

  onDelBranch(branch: string) {
    this.branchService.delBranch(branch, function(data){
      console.log(data);
    })
  }
}
