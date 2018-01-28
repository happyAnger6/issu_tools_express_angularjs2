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
  public newBranch = new Branch('', '', [], 0);
  public newChildBranch = new Branch('', '', [], 0);
  constructor(private branchService: BranchService,
              private topoService: TopoService) { }

  @ViewChild('topoArea')
  topoArea: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
    const topoComp = this;
    this.branchService.getFeedbackBranchs(function(branchs){
      topoComp.bNums = branchs ? branchs.length : 0;
      topoComp.drawTopo(branchs);
    });
  }

  refreshTopo() {
    const topoComp = this;
    this.branchService.getFeedbackBranchs(function(branchs) {
      topoComp.bNums = branchs ? branchs.length : 0;
      topoComp.drawTopo(branchs);
    });
  }

  drawTopo(branchs) {
    const canvas = document.getElementById('canvas');
    this.topoService.initContainer(canvas, 130, 30, 10, 20, 2, this);
    this.topoService.drawNodes(branchs);
  }

  onAddNewBranch() {
    this.branchService.addBranch(this.newBranch, function(result){

    });
  }

  onAddChildBranch(parent: string) {
    this.edit = false;
    this.newChildBranch.ParentName = parent;
    const topoComp = this;
    this.branchService.addBranch(this.newChildBranch, function(result){
      topoComp.refreshTopo();
    });
  }

  onAddBranch() {
    this.edit = true;
  }

  onDelBranch(branch: string) {
    const topoComp = this;
    this.branchService.delBranch(branch, function(result){
    });
  }
}
