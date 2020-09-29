import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { RouteEditService } from '../service/route-edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  route: any;
  create: boolean = false;
  detail: boolean = false;

  constructor(private router: Router,
    public routeEditService: RouteEditService,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.route = Object.assign({}, this.routeEditService.route);
  }

  submit() {
    if (this.route.from) {
      this.update();
    } else {
      this.add();
    }

    this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        title: 'Alert',
        message: 'To confirm the update, save on the route selection screen !!',
        info: '',
        type: 'alert'
      }
    }).afterClosed()
      .subscribe(() => this.router.navigateByUrl(`/generic-orchestrator/new`));

  }

  add(): void {
    this.routeEditService.newRoute(this.route);
  }

  update(): void {
    this.routeEditService.editRoute(this.route);
  }

  // update = 

}
