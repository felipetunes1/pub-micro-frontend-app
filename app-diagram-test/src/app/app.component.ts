import { Component } from '@angular/core';
import { TreelistService } from './treelist.service';
import data from './DatabaseLayout';

import 'codemirror/mode/xml/xml';
import { ActivatedRoute } from '@angular/router';
import { RouteEditService } from './service/route-edit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public treeLists = [];
  public currentlySelectedTree;
  public currentlySelectedTreeId;

  constructor(private treelistsvc: TreelistService,
    public activateRouter: ActivatedRoute, public routeEditService: RouteEditService) {

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
