import { Component, ElementRef, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { Network } from 'vis/index-network';
import { DataSet } from 'vis/index-timeline-graph2d';

import { BranchService } from '../../../../services/branch.service';
import {TopoService} from '../../../../services/topo.service';
import {BRANCHS} from "../../../../mocks/branchs";

@Component({
  selector: 'app-topo-show',
  templateUrl: './topo-show.component.html',
  styleUrls: ['./topo-show.component.css']
})

export class TopoShowComponent implements OnInit, AfterViewInit {

  public curNode: any;
  public edit = false;
  constructor(private branchService: BranchService,
              private topoService: TopoService) { }

  @ViewChild('topoArea')
  topoArea: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
    var canvas = document.getElementById('canvas');
    this.topoService.initContainer(canvas, 100, 30, 10, 20, 2, this);
    this.topoService.drawNodes(BRANCHS, 0);
  }

  onAddBranch(parent: string) {
    this.edit = true;
  }

}
