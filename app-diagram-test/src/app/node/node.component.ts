import { Component, Input, OnInit } from '@angular/core';
import { TreelistService } from '../treelist.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node;
  selectedNodeID: string;
  nodeId: string;
  ticks = 0;
  public hideChildrenList;
  mouseDownX: string;
  mouseDownY: string;

  currentlyHoveringId: string;

  constructor(private treelistsvc: TreelistService) {
    // let timer1 = timer(0, 100);
    // timer1.subscribe(t => this.ticks = t);
    this.treelistsvc.hideChilrenToggler$.subscribe((status) => {
      this.hideChildrenList = treelistsvc.hideChildrenOfIds;
    });
    this.treelistsvc.hoverNodeToggler$.subscribe((status) => {
      this.currentlyHoveringId = treelistsvc.currentlyHoveringId;
    });
    this.hideChildrenList = [];
  }


  ngOnInit() {
  }

  shouldShowPopup(id) {
    return this.currentlyHoveringId === id;
  }

  hideChilren(id) {
    this.treelistsvc.hideNodeChilren(id);
  }

  mouseDown(nodeID: string, selectedNode, event) {
    // console.log('mouse down: ' + this.ticks);
    if (event.target.id !== 'expandbutton') {
      this.mouseDownX = event.clientX;
      this.mouseDownY = event.clientY;
    }
  }

  mouseUp(nodeID: string, selectedNode, event) {
    if (event.target.id !== 'expandbutton' && event.target.id !== 'addbutton') {
      if (this.mouseDownX === event.clientX && this.mouseDownY === event.clientY) {
        // this.sidenav.setFocusNode(nodeID, selectedNode);
      // } else if (selectedNode !== this.sidenav.getFocusNode()) {
        // this.sidenav.setFocusNode(nodeID, selectedNode);
      }
    }
  }

  getSelectedNodeID() {
    // console.log('click')
    return null;
  }

  mouseEnter(id, event) {
    console.log('enter');
    this.treelistsvc.setCurrentlyHoveringId(id);
  }

  mouseLeave(id, event)  {
    console.log('leaving');
    this.treelistsvc.setCurrentlyHoveringId('');
  }

  nodeClicked(nodeID: string, selectedNode, event) {
    // this.sidenav.setFocusNode(nodeID, selectedNode);
    console.log('click', this.ticks, nodeID);
  }

  shouldHideChildren(id) {
    return this.treelistsvc.hideChildrenOfIds.includes(id);
  }

  addChild(id) {
    // console.log('add child to ' + id);
    this.treelistsvc.addChild(id);
  }

  removeChild(id) {
    
    this.treelistsvc.addChild(id);

  }
}
