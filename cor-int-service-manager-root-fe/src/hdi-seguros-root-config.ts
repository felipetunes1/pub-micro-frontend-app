import AppService from "./modules/service/application.service";
import MenuService from "./modules/service/menu.service";
import Build from "./modules/build.simple-spa";
import HtmlBuildTemplate from "./modules/service/html.document.service";

import 'bootstrap/dist/css/bootstrap.css';

let templateBuild = new HtmlBuildTemplate(document, "single-spa-layout");

Promise.all([
  AppService.listApplication(),
  MenuService.listMenu('')]
).then(
  Build.create().build(window as any, templateBuild)
);


