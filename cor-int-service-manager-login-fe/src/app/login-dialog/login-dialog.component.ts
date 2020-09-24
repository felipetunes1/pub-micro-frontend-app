import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html'
})
export class LoginDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit(): void {
  }

  sign() {
    return () => {
      this.dialogRef.close();
    }
  }

}
