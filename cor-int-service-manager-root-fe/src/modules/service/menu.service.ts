import fetch from "node-fetch";
import MenuModel from "../model/menu.model";

const mock = [
   {
      "app": "@hdi-seguros/header-app",
      "appId": 1,
      "version": 1,
      "route": null,
      "elementName": "header",
      "routeException": [],
      "routeType": 0
   },
   {
      "app": "@hdi-seguros/navbar-menu-app",
      "appId": 2,
      "version": 1,
      "route": null,
      "elementName": "nav",
      "routeException": [
         "/login"
      ],
      "routeType": 0
   },
   {
      "app": "hdi-seguros-notification-app",
      "appId": 5,
      "version": 1,
      "route": null,
      "elementName": "footer",
      "routeException": [],
      "routeType": 0
   },
   {
      "app": "hdi-seguros-login-fe",
      "appId": 6,
      "version": 1,
      "route": null,
      "elementName": "nav",
      "routeException": [],
      "routeType": 1
   },
   {
      "app": "hdi-seguros-login-fe",
      "appId": 7,
      "version": 1,
      "route": '/login',
      "elementName": "main",
      "routeException": [],
      "routeType": 1
   },
   {
      "app": "@hdi-seguros/home-app",
      "appId": 3,
      "version": 1,
      "route": "/",
      "elementName": "main",
      "routeException": [],
      "routeType": 1
   },
   {
      "app": "cor-int-service-manager-query-connector-fe",
      "appId": 8,
      "version": 1,
      "route": '/query-connector',
      "elementName": "main",
      "routeException": [],
      "routeType": 1
   },
   {
      "app": "cor-int-service-manager-query-connector-create-fe",
      "appId": 9,
      "version": 1,
      "route": '/query-connector/new',
      "elementName": "main",
      "routeException": [],
      "routeType": 1
   },
   {
      "app": "cor-int-service-manager-query-connector-list-fe",
      "appId": 10,
      "version": 1,
      "route": '/query-connector/list',
      "elementName": "main",
      "routeException": [],
      "routeType": 1
   },
   {
      "app": "cor-int-service-manager-query-connector-detail-fe",
      "appId": 11,
      "version": 1,
      "route": '/query-connector/detail/[\\w]+',
      "elementName": "main",
      "routeException": [],
      "routeType": 1
   },
   {
      "app": "cor-int-service-manager-query-connector-edit-fe",
      "appId": 12,
      "version": 1,
      "route": '/query-connector/edit/[\\w]+',
      "elementName": "main",
      "routeException": [],
      "routeType": 1
   },
   {
      "app": "@hdi-seguros/footer-app",
      "appId": 4,
      "version": 1,
      "route": null,
      "elementName": "footer",
      "routeException": [],
      "routeType": 0
   }
]

class MenuService {
   constructor() {

   }

   static async listMenu(userId: string): Promise<Array<MenuModel>> {

      // return await fetch(`//localhost:8083/corporate/v1/menu?userRequest=${userId}`)
      //    .then(res => res.json())
      //    .then(({ menus }) => menus);
      return new Promise(resolve => resolve(mock));
   }

}


export default MenuService;