import { Component, OnInit } from '@angular/core';
import { NotificationsService } from "./service/notifications.service";
import { Observable, Subscription } from 'rxjs';
import { SnackBarExampleComponent } from './snack-bar-example/snack-bar-example.component';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;

  userId: string = 'teste4';
  messages: Observable<any>;

  constructor(private snackBar: MatSnackBar,
    private notificationsService: NotificationsService) { }

  openSnackBar(dataMessage: any) {
    let data = {
      funcClose: () => {
        this.notificationsService.dismissMessage(this.userId, dataMessage.$key)
      },
      ...dataMessage
    }
    this.snackBar.openFromComponent(SnackBarExampleComponent, {
      data,
      panelClass: 'style-success',
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props),
    );
    if (this.singleSpaProps.getLoggin()) {
      this.messages = this.notificationsService.getMessages(this.singleSpaProps.getLoggin().userId);
      this.messages.subscribe(response => {
        console.log("=>>", response);
        response.forEach(element => {

          this.singleSpaProps.addNotification(element)
        });
      })
    }
    this.singleSpaProps.registerLoggedIn((logged) => {
      if (logged) {
        console.log(logged, this.singleSpaProps.getLoggin().userId)
        this.messages = this.notificationsService.getMessages(this.singleSpaProps.getLoggin().userId);
        this.messages.subscribe(response => {
          console.log("=>>", response);
          response.forEach(element => {

            this.singleSpaProps.addNotification(element)
          });
        });
      } else {
        // this.singleSpaProps.addNotification(;);
        this.notificationsService.unsubscribe();
      }
    });
  }

  singleSpaProps$ = singleSpaPropsSubject.asObservable();

}
