import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expire',
  templateUrl: './expire.component.html'
})
export class ExpireComponent implements OnInit {

  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  interval: any;

  constructor(public dialogRef: MatDialogRef<ExpireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props)
    );

    this.interval = setInterval(() => {
      this.data.time--;
      if(this.data.time == 0) {
        clearInterval(this.interval);
        this.singleSpaProps.callLogedOut();
      }
    }, 1000);
  }

  renew() {
    clearInterval(this.interval);
    this.dialogRef.close();
  }

  singleSpaProps$ = singleSpaPropsSubject.asObservable();

}
