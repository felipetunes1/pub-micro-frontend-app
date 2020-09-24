import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpireComponent } from '../expire/expire.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html'
})
export class HomeNavComponent implements OnInit {

  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props)
    );

    if (!this.singleSpaProps.getLoggin())
      this.openLogin()
  }

  openExpire(): void {
    const dialogRef = this.dialog.open(ExpireComponent, {
      data: {
        time: 60
      },
      width: '750px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed expire');
    });

  }
  openLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      autoFocus: true,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed login <<==');
      if (!this.singleSpaProps.getLoggin())
        this.openLogin()
    });

  }

  signOut() {
    this.singleSpaProps.getLoggin()
    this.openLogin();
  }

  showButton() {
    return !this.singleSpaProps.getLoggin()
  }

  singleSpaProps$ = singleSpaPropsSubject.asObservable();

}
