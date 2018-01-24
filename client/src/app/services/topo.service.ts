import { Injectable } from '@angular/core';
import {Branch} from "../models/branch";

@Injectable()
export class TopoService {

  private stage: any; scene: any;
  private nodeW: number; nodeH: number; startX: number; startY: number; lw: number;
  private maxX: number;
  private component: any;
  constructor() { }

  initContainer(container: any, w: number, h: number, sx: number, sy: number, lw: number, component: any) {
    this.stage = new JTopo.Stage(container);
    this.scene = new JTopo.Scene(this.stage);
    this.nodeW = w;
    this.nodeH = h;
    this.startX = sx;
    this.startY = sy;
    this.lw = lw;
    this.component = component;

    this.stage.click(function(event){
      if (event.button == 0) {
        $("#contextmenu").hide();
      }
    });
  };

  handler(event, node, my) {
    if(event.button == 2) {
      $("#contextmenu").css({
      }).show();
      my.curNode = node;
    }
  }

  // 节点
  newNode(x, y, text){
    var node = new JTopo.Node(text);
    node.setLocation(x, y);
    node.setSize(this.nodeW, this.nodeH);
    node.textPosition = 'Middle_Center';
    this.scene.add(node);
    var handler = this.handler;
    var my = this.component;
    var currNode = null;
    node.addEventListener('mouseup', function(event){
      currNode = this;
      handler(event, node, my);
    });
    return node;
  }

  newLink(nodeA: any, nodeB: any, text: string) {
    var link = new JTopo.Link(nodeA, nodeB, text);
    link.lineWidth = this.lw; //line width
    //link.dashedPattern = dashedPattern; //5 is dash line
    link.bundleOffset = 60; //折线拐角处的长度
    link.bundleGap = 20; //线条之间的间隔
    link.textOffsetY = 3; //文本偏移量
    link.strokeColor = '0,200,255';
    link.arrowsRadius = 10;
    this.scene.add(link);
    return link;
  }

  // 折线
  newFoldLink(nodeA: any, nodeZ :any, text: string){
    var link = new JTopo.FoldLink(nodeA, nodeZ, text);
    link.direction =  'horizontal';
    link.arrowsRadius = 15; //箭头大小
    link.lineWidth = this.lw; // 线宽
    link.bundleOffset = 60; // 折线拐角处的长度
    link.bundleGap = 20; // 线条之间的间隔
    link.textOffsetY = 3; // 文本偏移量（向下3个像素）
    link.strokeColor = JTopo.util.randomColor(); // 线条颜色随机
    //link.dashedPattern = dashedPattern;
    this.scene.add(link);
    return link;
  }

  drawLine(nodeA: any, nodeB: any, lineType: number) {
    if (1 === lineType) {
      this.newLink(nodeA, nodeB, "");
    }
    else if(2 === lineType) {
      this.newFoldLink(nodeA, nodeB, "");
    }
  }

  drawTopo(branchs: Branch[], branch: Branch, x: number, y: number, parent: any, lineType: number){
    var node = this.newNode(x, y, branch.name);
    if (parent && lineType > 0)
    {
      this.drawLine(parent, node, lineType)
    }
    branch.childIDs.forEach((val, idx, ary) => {
      this.maxX = this.maxX + (this.nodeW + 30) * idx;
      this.drawTopo(branchs, branchs[val], this.maxX, y + this.nodeH + 30, node, idx > 0? 2 : 1);
    });
  }

  drawNodes(branchs: Branch[], root: number) {
    this.maxX = this.startX;
    this.drawTopo(branchs, branchs[root], this.startX, this.startY, null, -1);
  }

}
