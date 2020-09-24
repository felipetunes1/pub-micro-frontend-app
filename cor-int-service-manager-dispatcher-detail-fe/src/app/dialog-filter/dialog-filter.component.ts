import { Component, OnInit, Inject } from '@angular/core';
import { DispatcherModel } from '../models/dispatcher.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-filter',
  templateUrl: './dialog-filter.component.html'
})
export class DialogFilterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DispatcherModel) {}
    
  ngOnInit(): void {
  }

}
