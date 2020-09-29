import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { RouteEditService } from '../service/route-edit.service';

@Component({
  selector: 'app-edit-xml',
  templateUrl: './edit-xml.component.html'
})
export class EditXmlComponent implements OnInit {
  xmlString: string;
  routeId: string;
  detail: boolean = true;

  constructor(private router: Router,
    public routeEditService: RouteEditService,
    public activateRouter: ActivatedRoute,
    public dialog: MatDialog, public location: Location) {
    this.routeId = this.activateRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.xmlString = `<routes xmlns="http://camel.apache.org/schema/spring">\n${this.routeEditService.editableRoutes.filter(item => !item.remove).map(item => item.xmlString)}</routes>`;
  }

  cancel() {
    this.location.back()
  }

  confirm() {
    this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        title: 'Alert',
        message: 'To confirm the update, save on the route selection screen !!',
        info: '',
        type: 'alert'
      }
    }).afterClosed()
      .subscribe(() => {
        this.routeEditService.editFull(this.xmlString);
        this.router.navigateByUrl(`/generic-orchestrator/detail/${this.routeId}`)
      });
  }

}
