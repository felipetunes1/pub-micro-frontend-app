import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogFilterComponent } from '../dialog-filter/dialog-filter.component';
import { GenericOrchestratorModel } from '../models/generic-orchestrator.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  genericOrchestratorFilter: GenericOrchestratorModel = new GenericOrchestratorModel();
  genericOrchestratorList: GenericOrchestratorModel[] = [
    new GenericOrchestratorModel()
  ];

  pageSize: number = 5;
  pageIndex: number = 0;

  filters: any = {};

  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goEdit(id) {
    this.redirect(`/generic-orchestrator/edit/${id}`)
  }

  goDetail(id) {
    this.redirect(`/generic-orchestrator/detail/${id}`)
  }

  redirect(route) {
    history.pushState({"state" : "teste"}, null, route)
  }

  getPaginatorData(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  remove(filter: any): void {
    delete this.filters[filter.key];
  }

  openFilters() {
    const dialogRef = this.dialog.open(DialogFilterComponent, {
      width: '400px',
      data: this.genericOrchestratorFilter
    });
    dialogRef.afterClosed().subscribe((result: GenericOrchestratorModel) => {
      if (result) {
        if(result.templateCode)
          this.addFilter('Template Code', result.templateCode);
      }

    });
  }

  addFilter(field: string, value: any) {
    if (!!value)
      this.filters[field] = value;
    else
      delete this.filters[field];
  }
}
