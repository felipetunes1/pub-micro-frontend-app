import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QueryConnectorModel } from '../models/query-connector.model';

@Component({
  selector: 'app-filters-dialog',
  templateUrl: './filters-dialog.component.html'
})
export class FiltersDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FiltersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QueryConnectorModel) {}
    
  ngOnInit(): void {
  }

}
