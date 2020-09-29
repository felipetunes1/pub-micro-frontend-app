import { Component } from '@angular/core';
import { TreelistService } from './treelist.service';
import data from './DatabaseLayout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public treeLists = [];
  public currentlySelectedTree;
  public currentlySelectedTreeId;


  constructor (private treelistsvc: TreelistService) {

    this.treelistsvc.treeToggler$.subscribe((status) => {
      this.currentlySelectedTree = treelistsvc.currentlySelectedTree;
      this.currentlySelectedTreeId = treelistsvc.currentlySelectedTreeId;
      this.treelistsvc.clearHiddenChildren();
    });

    for (const c of data.children) {
      const alist = [];
      alist.push(c);
      this.treeLists.push([alist]);
    }

    this.treelistsvc.setCurrentlySelectedTree(this.treeLists[0]);
    this.currentlySelectedTree = treelistsvc.currentlySelectedTree;
    this.currentlySelectedTreeId = this.currentlySelectedTree[0][0].id;

  }

  differentTreeSelected(t) {
    if (this.currentlySelectedTree !== t) {
      this.treelistsvc.setCurrentlySelectedTree(t);
    }

  }
}
