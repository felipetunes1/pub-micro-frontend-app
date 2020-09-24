import { registerApplication, start } from "single-spa";
import {
   constructApplications,
   constructRoutes,
   constructLayoutEngine,
} from "single-spa-layout";

import MenuModel from "./model/menu.model";
import ApplicationModel from "./model/application.model";
import HtmlBuildTemplate from "./service/html.document.service";
import RegisterService from "./service/register.service";

class BuildSimpleSpa {

   static create() {
      return new BuildSimpleSpa();
   }

   constructor() {

   }

   // Realiza a importação dos APP JS para funcionamento dos micro front ends
   private importMaps(applications: Array<ApplicationModel>, importMapOverrides): void {
      // reseta todas as importações
      importMapOverrides.resetOverrides();

      // realiza a importação do APPs
      applications.forEach(({ app, endpoint }) => importMapOverrides.addOverride(app, endpoint));

   }

   // Cria o template HTML
   private buildTemplate(menus: Array<MenuModel>, templateBuild: HtmlBuildTemplate): void {
      // Percorre todos os elementos HTMLs do template passado
      templateBuild.htmlTemplate.childNodes
         .forEach((nodes: HTMLElement) =>
            // Busca dos menus informados quais estão em cada uma das tags para configurar o objeto
            menus.filter(menu => menu.elementName.toUpperCase() === nodes.tagName)
               .forEach((menu) => {
                  if (menu.route) {
                     // se possui rota cria a tag Route superior a aplicação para que a aplicação só seja chamada quando a rota for acionada
                     nodes.appendChild(templateBuild.buildTagRoute(templateBuild.buildTagApplication(menu.app), menu.route));

                  } else {
                     // se não possui rota cria a aplicação como default para template da tela
                     nodes.appendChild(templateBuild.buildTagApplication(menu.app));

                  }
               })
         )

   }

   // Metodo de construção do Simple SPA, Rotas e HTML
   build({ history: History, importMapOverrides }, templateBuild: HtmlBuildTemplate) {
      return ([applicationService, menuService]) => {

         // Realiza a importação dos APP Js
         this.importMaps(applicationService, importMapOverrides);
         // Cria o Template HTML
         this.buildTemplate(menuService, templateBuild);

         // metodo Simple SPA para mapeamento e construção das rotas
         const routes = constructRoutes(templateBuild.htmlTemplate);

         // metodo Simple SPA para mapeamento e contrução dos apps
         const applications = constructApplications({
            routes,
            loadApp({ name }) {
               return System.import(name);
            },
         });

         // metodo Simple SPA para construção do layout SPA
         const layoutEngine = constructLayoutEngine({ routes, applications });

         console.log(menuService.filter(menu => menu.route).map(menu => ({ title: menu.app, path: menu.route })))


         // Realiza o registro das APPs         
         let registerService = new RegisterService(menuService);
         let registerModelList = applications.map(registerService.build(history, menuService.filter(menu => menu.route).map(menu => ({ title: menu.app, path: menu.route }))));
         registerModelList.forEach(registerService.register)

         // Ativa layout e realiza o start do Simple SPA
         layoutEngine.activate();
         start();
      }
   }

}

export default BuildSimpleSpa;