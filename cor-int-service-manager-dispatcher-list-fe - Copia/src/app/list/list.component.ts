import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DispatcherModel } from '../models/dispatcher.model';
import { Observable } from 'rxjs';
import { DispatcherService } from '../service/dispatcher.service';
import { DialogFilterComponent } from '../dialog-filter/dialog-filter.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  dispatcherList: DispatcherModel[];
  dispatcherFilter = new DispatcherModel();

  pageSize: number = 5;
  pageIndex: number = 0;

  filters: any = {};

  constructor(private router: Router, public dialog: MatDialog, private dispatcherService: DispatcherService) { }

  ngOnInit(): void {
    this.dispatcherList = this.dispatcherService.listAll();
  }

  goEdit(id) {
    this.redirect(`/dispatcher/edit/${id}`)
    // this.router.navigate([`/dispatcher/edit/${id}`]);
  }

  goDetail(id) {
    this.redirect(`/dispatcher/detail/${id}`)
    // this.router.navigate([`/dispatcher/detail/${id}`]);
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
      data: this.dispatcherFilter
    });
    dialogRef.afterClosed().subscribe((result: DispatcherModel) => {
      if (result) {
        if(result.codeTmp != 0)
          this.addFilter('Template Code', result.codeTmp);
        this.addFilter('Internal URL Contains', result.internalUrl);
        this.addFilter('Old Version', result.oldVersionMs);
        this.addFilter('Fluxo XML', result.isFluxoXml);
        this.addFilter('Method', result.method);
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
