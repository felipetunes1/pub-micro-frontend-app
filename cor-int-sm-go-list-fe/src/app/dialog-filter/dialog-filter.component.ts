import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericOrchestratorModel } from '../models/generic-orchestrator.model';

@Component({
  selector: 'app-dialog-filter',
  templateUrl: './dialog-filter.component.html'
})
export class DialogFilterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GenericOrchestratorModel) {}
    
  ngOnInit(): void {
  }

}
