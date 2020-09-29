import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { RouteEditService } from '../service/route-edit.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html'
})
export class RouteListComponent implements OnInit {

  public details: boolean = false;
  public create: boolean = false;

  public filter: string;

  public routeList = [];
  public routeId: string;
  public removed: any;

  constructor(private router: Router,
    public activateRouter: ActivatedRoute,
    public routeEditService: RouteEditService,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.routeId = this.activateRouter.snapshot.paramMap.get('id')
    if (!this.routeEditService.editableRoutes.length)
      this.routeEditService.getRoute(this.routeId);

  }

  typeOf(input: any): string {
    return typeof (input);
  }

  letsGo(route) {

    if (route.remove) {
      this.dialog.open(MessageDialogComponent, {
        width: '400px',
        data: {
          title: 'Error',
          message: 'Record deleted, to edit please reset status!',
          info: 'Want to reset status to edit?',
          type: 'confirm'
        }
      }).afterClosed().subscribe(result => {
        if (result) {
          this.routeEditService.resetRoute(route);
          this.routeEditService.route = route;
          this.router.navigateByUrl(`/generic-orchestrator/edit/${this.activateRouter.snapshot.params.id}/route`);
        }
      });
    } else {
      this.routeEditService.route = route;
      this.router.navigateByUrl(`/generic-orchestrator/edit/${this.activateRouter.snapshot.params.id}/route`);
    }
  }

  color(route): string {
    let index = this.routeEditService.getIndex(route);
    return index < 0 ? 'new' : (this.routeEditService.editableRoutes[index] != this.routeEditService.routes[index] ? 'edit' : 'none');
  }

  newRoute(): void {
    this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: {
        title: 'New Route',
        type: 'input',
        inputLabel: 'Route Name',
        hint: 'To initialize the route please info the route name'
      }
    }).afterClosed().subscribe(response => {
      if (response.replaceAll(' ', '')) {
        this.routeEditService.route = {
          xmlString: `<route id="direct:${response.replaceAll(' ', '')}">
    <from uri="direct:${response.replaceAll(' ', '')}" />
</route>`,
          from: {
            _uri: `direct:${response.replaceAll(' ', '')}`
          }
        }
        this.router.navigateByUrl(`/generic-orchestrator/edit/${this.activateRouter.snapshot.params.id}/route`);

      }

    })
  }

  remove(route: any) {
    this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        title: 'Delete Route',
        message: 'Want to remove this route?',
        info: 'Remember to remove all references to this route!',
        type: 'confirm'
      }
    }).afterClosed().subscribe(result => {
      if (result)
        this.routeEditService.removeRoute(route)
    });
  }

  resetStatus(route: any) {
    this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        title: 'Restore Status',
        message: 'Want to restore status this route?',
        info: 'if it is a new route, it will be deleted',
        type: 'confirm'
      }
    }).afterClosed().subscribe(result => {
      if (result)
        this.routeEditService.resetRoute(route)
    });
  }

  startRemove(route) {
    this.removed = setTimeout(() => {
      this.remove(route);
    }, 2000);
  }

  stopRemove() {
    clearTimeout(this.removed);
  }

  showXml() {
    this.router.navigateByUrl(`/generic-orchestrator/edit/${this.activateRouter.snapshot.params.id}/xml`);
  }
}
