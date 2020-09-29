import fetch from "node-fetch";
import ApplicationModel from "../model/application.model";

const mock = [
   {
      "version": 1,
      "appId": 1,
      "app": "@hdi-seguros/header-app",
      "endpoint": "//localhost:9301/hdi-seguros-header-app.js",
      "elementName": "header",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 4,
      "app": "@hdi-seguros/footer-app",
      "endpoint": "//localhost:9306/hdi-seguros-footer-app.js",
      "elementName": "footer",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 3,
      "app": "@hdi-seguros/home-app",
      "endpoint": "//localhost:9303/hdi-seguros-home-app.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 2,
      "app": "@hdi-seguros/navbar-menu-app",
      "endpoint": "//localhost:9302/hdi-seguros-navbar-menu-app.js",
      "elementName": "nav",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 7,
      "app": "hdi-seguros-login-fe",
      "endpoint": "//localhost:4900/main.js",
      "elementName": "nav",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 6,
      "app": "hdi-seguros-login-fe",
      "endpoint": "//localhost:4900/main.js",
      "elementName": "nav",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 8,
      "app": "cor-int-service-manager-query-connector-fe",
      "endpoint": "//localhost:4201/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 9,
      "app": "cor-int-service-manager-query-connector-create-fe",
      "endpoint": "//localhost:4205/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 10,
      "app": "cor-int-service-manager-query-connector-list-fe",
      "endpoint": "//localhost:4204/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 11,
      "app": "cor-int-service-manager-query-connector-detail-fe",
      "endpoint": "//localhost:4202/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 12,
      "app": "cor-int-service-manager-query-connector-edit-fe",
      "endpoint": "//localhost:4203/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 13,
      "app": "cor-int-service-manager-dispatcher-fe",
      "endpoint": "//localhost:4206/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 14,
      "app": "cor-int-service-manager-dispatcher-list-fe",
      "endpoint": "//localhost:4207/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 15,
      "app": "cor-int-service-manager-dispatcher-create-fe",
      "endpoint": "//localhost:4208/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 16,
      "app": "cor-int-service-manager-dispatcher-detail-fe",
      "endpoint": "//localhost:4209/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 17,
      "app": "cor-int-service-manager-dispatcher-edit-fe",
      "endpoint": "//localhost:4210/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 18,
      "app": "cor-int-service-manager-generic-orchestrator-edit-fe",
      "endpoint": "//localhost:4211/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 19,
      "app": "cor-int-service-manager-generic-orchestrator-create-fe",
      "endpoint": "//localhost:4212/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 20,
      "app": "cor-int-service-manager-generic-orchestrator-detail-fe",
      "endpoint": "//localhost:4213/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 5,
      "app": "hdi-seguros-notification-app",
      "endpoint": "//localhost:3999/main.js",
      "elementName": "footer",
      "defaultAttr": 1
   },
]

class AppService {
   constructor() {

   }

   static async listApplication(): Promise<Array<ApplicationModel>> {

      // return await fetch('//localhost:8081/corporate/v1/applications')
      //    .then(res => res.json())
      //    .then(({ applications }) => applications);

      return new Promise(resolve => resolve(mock));
   }


}


export default AppService;