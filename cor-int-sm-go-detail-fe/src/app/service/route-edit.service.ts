import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as X2Js from 'x2js';

@Injectable({
  providedIn: 'root'
})
export class RouteEditService {
  routes: any[] = [];
  editableRoutes: any[] = [];
  route: any;
  routeFull: string;
  private x2Js;

  constructor(public http: HttpClient) {
    this.x2Js = new X2Js();
  }

  getRoute(id: string) {
    return this.http.get<any>('assets/route.xml').subscribe(response => {
      this.routeFull = response.a;
      this.transformXml();
      this.routes = this.editableRoutes.map(item => Object.assign({}, item));
    });
  }

  editFull(xmlString: string) {
    this.routeFull = xmlString;
    this.transformXml();

    this.editableRoutes.forEach(item => {
      let index = this.getIndexFromRoute(item, this.routes);
      if(index != null && this.routes[index].xmlString != item.xmlString) {
        item.edit = true;
      } else if(index == null) {
        item.newRoute = true;
      }
    })
    this.routes.forEach(item => {
      console.log(item)
      let index = this.getIndexFromRoute(item, this.editableRoutes);
      console.log(index, this.editableRoutes[index])
      if(index == null) {
        let copy = Object.assign({}, item)
        copy.remove = true;
        this.editableRoutes.push(copy);
      }
    })
  }

  transformXml() {
    this.editableRoutes = this.routeFull.split(/<route[\s\w\=\"\/\:\.\?]*>/).map((item: string) => {
      try {
        let response = this.x2Js.xml2js(`<route>${item}`.replace('<\/routes>', ''));

        response = response.route;
        if (response && response.from && response.from._uri) {
          response.xmlString =
            `<route id="${response.from._uri.replace('direct:','')}">${item}`.replace('</routes>', '');
          return response
        }
      } catch (e) {

      }
      return null;
    }).filter(item => item)

  }

  getIndexFromRoute(route: any, routes: any): number {
    return routes.map((item, index) => {
      return item.from._uri == route.from._uri ? index : null
    }).find(item => item != null);

  }

  getIndex(route: any): number {
    return this.getIndexFromRoute(route, this.editableRoutes);
  }

  generateRoute(xmlString: string): any {
    let response: any = this.x2Js.xml2js(xmlString);
    response = response.route;
    response.xmlString = xmlString;
    return response;

  }

  editRoute(route: any) {
    let index = this.getIndex(route);

    if (this.editableRoutes[index]) {
      let response = this.generateRoute(route.xmlString);

      if (!this.editableRoutes[index].newRoute)
        response.edit = true;

      this.editableRoutes[index] = response;
    }

  }

  newRoute(route: any) {
    let response = this.generateRoute(route.xmlString);
    response.newRoute = true;
    this.editableRoutes.push(response);
  }

  removeRoute(route: any) {
    let index = this.getIndex(route);

    if (this.routes[index])
      this.editableRoutes[index].remove = true;
    else
      this.editableRoutes.splice(index, 1);

  }

  resetRoute(route: any) {
    let index = this.getIndex(route);
    let indexRoutes = this.getIndexFromRoute(route, this.routes);

    if (this.routes[indexRoutes])
      this.editableRoutes[index] = Object.assign({}, this.routes[indexRoutes]);
    else
      this.editableRoutes.splice(index, 1);

  }
}
