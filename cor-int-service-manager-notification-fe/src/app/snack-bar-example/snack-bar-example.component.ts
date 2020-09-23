import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-example',
  templateUrl: './snack-bar-example.component.html'
})
export class SnackBarExampleComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<SnackBarExampleComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    snackBarRef.afterDismissed().subscribe(() => { this.data.funcClose(); });
  }

}
