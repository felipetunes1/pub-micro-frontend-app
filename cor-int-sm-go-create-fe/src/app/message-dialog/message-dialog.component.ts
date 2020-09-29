import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html'
})
export class MessageDialogComponent implements OnInit {

  inputValue: string;

  constructor(public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
