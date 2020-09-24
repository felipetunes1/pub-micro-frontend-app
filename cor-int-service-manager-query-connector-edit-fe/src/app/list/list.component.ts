import { Component, OnInit } from '@angular/core';
import { Database } from '../models/database.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FiltersDialogComponent } from '../filters-dialog/filters-dialog.component';
import { QueryConnectorModel } from '../models/query-connector.model';
import { Register } from '../models/register.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  folders: Array<Register> = [
    new Register(new Database('SQL 1', 'sql'), '1'),
    new Register(new Database('SQL 2', 'sql'), '21'),
    new Register(new Database('SQL 3', 'sql'), '31'),
    new Register(new Database('SQL 4', 'sql'), '41'),
    new Register(new Database('SQL 5', 'sql'), '67'),
    new Register(new Database('SQL 6', 'sql'), '12'),
    new Register(new Database('SQL 7', 'sql'), '22'),
    new Register(new Database('SQL 8', 'sql'), '32'),
    new Register(new Database('SQL 9', 'sql'), '42'),
    new Register(new Database('SQL 10', 'sql'), '672'),
    new Register(new Database('SQL 11', 'sql'), '13'),
    new Register(new Database('SQL 12', 'sql'), '23'),
    new Register(new Database('SQL 13', 'sql'), '33'),
    new Register(new Database('SQL 14', 'sql'), '43'),
    new Register(new Database('SQL 15', 'sql'), '673'),
    new Register(new Database('SQL 16', 'sql'), '14'),
    new Register(new Database('SQL 17', 'sql'), '24'),
    new Register(new Database('SQL 18', 'sql'), '34'),
    new Register(new Database('SQL 19', 'sql'), '44'),
    new Register(new Database('SQL 20', 'sql'), '674')
  ]

  pageSize: number = 5;
  pageIndex: number = 0;

  filters: any = {};

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goEdit(id) {
    this.router.navigate([`/query-connector/edit/${id}`]);
  }

  goDetail(id) {
    this.router.navigate([`/query-connector/detail/${id}`]);
  }

  getPaginatorData(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  remove(filter: any): void {
    delete this.filters[filter.key];
  }

  openFilters() {
    const dialogRef = this.dialog.open(FiltersDialogComponent, {
      width: '400px',
      data: new QueryConnectorModel()
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addFilter('Query Code', result.id);
        this.addFilter('Database Name', result.databaseName);
        this.addFilter('Collection', result.collection);
        this.addFilter('Query Container', result.query);
      }

    });
  }

  addFilter(field: string, value: string) {
    if (!!value)
      this.filters[field] = value;
    else
      delete this.filters[field];
  }

}
