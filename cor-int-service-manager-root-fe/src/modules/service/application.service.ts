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
      "app": "cor-int-sm-qc-create-fe",
      "endpoint": "//localhost:4209/main.js",
      "elementName": "main",
      "defaultAttr": 1
   },
   {
      "version": 1,
      "appId": 5,
      "app": "hdi-seguros-notification-app",
      "endpoint": "//localhost:4200/main.js",
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