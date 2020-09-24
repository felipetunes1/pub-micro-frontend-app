import MenuModel from "../model/menu.model";
import { registerApplication } from "single-spa";
import RegisterModel from "../model/register.model";

class RegisterService {
   routes: Array<MenuModel>;
   testeEnv: any;
   notifications: Array<any>;
   notificationAdd: Array<Function>;
   infoLogged: Array<Function>;

   constructor(routes: Array<MenuModel>) {
      this.routes = routes;
      this.testeEnv = {
         name: 'develop',
         id: 1
      }
      this.notifications = []
      this.notificationAdd = []
      this.infoLogged = []
   }

   // Metodo para encontrar algum APP para a rota enviada
   findRoute(): Function {
      return (location: Location) => (
         this.routes.find(
            ({ route, routeType }) => this.show(route, location, routeType)
         )
      )
   }

   // Pega currente APP de acordo com a Aplicação
   getCurrRoute({ name }): MenuModel {
      return this.routes.find(({ app }) => name == app)
   }

   // realiza o build do registro das Aplicações
   build(history: History, menus) {
      return (currApp) => (
         new RegisterModel(currApp.name,
            currApp.app, this.location(this.getCurrRoute(currApp), this.findRoute(), history),
            {
               menus,
               envs: [
                  {
                     name: 'develop',
                     id: 1
                  },
                  {
                     name: 'homolog',
                     id: 2
                  },
               ],
               getEnv: () => this.testeEnv,
               setEnv: (testeEnv) => this.testeEnv = testeEnv,
               getNotifications: () => this.notifications,
               setNotificationHeaderAdd: (not) => {
                  this.notificationAdd.push(not)
               },
               addNotification: (notification: any) => {
                  if (!(this.notifications.find(not => not.$key == notification.$key))) {
                  this.notifications.push(notification)
                  this.notificationAdd.forEach(not => not(this.notifications))
                  }
               },
               removeNotification: (notification: any) => {
                  console.log(notification.id);
                  this.notifications = this.notifications.filter(not => not.id != notification.id);
                  this.notificationAdd.forEach(not => not(this.notifications));
                  console.log(this.notifications);
               },
               callLogedIn: (login: string) => {
                  console.log("logn", login);
                  sessionStorage.setItem('shdiul', JSON.stringify({ userId: login }));
                  this.infoLogged.forEach((func) => func(true));
               },
               callLogedOut: (loginFormController: Function) => {
                  sessionStorage.removeItem('shdiul');
                  this.notifications = [];
                  this.notificationAdd.forEach(not => not(this.notifications));
                  this.infoLogged.forEach((func) => func(false));
               },
               registerLoggedIn: (infoLogged: Function) => {
                  this.infoLogged.push(infoLogged);
               },
               getLoggin: () => {
                  return JSON.parse(sessionStorage.getItem('shdiul'));
               }
            })
      )
   }

   // Realiza o registro no Simple SPA dos APPs
   // TODO: Receber props
   register({ name, app, activityFn, customProps }): void {
      registerApplication(
         name, app, activityFn, customProps
      )
   }


   // Metodo responsavel por aplicar o RegEx para saber se APP pode ser exibido ou não
   private show(regex: string, location: Location, type: number = 0): boolean {
      // console.log(`^${regex}${type == 2 ? '*' : '$'}`, location.pathname, new RegExp(`^${regex}${type == 2 ? '*' : '$'}`).test(location.pathname))
      return new RegExp(`^${regex}${type == 2 ? '*' : '$'}`).test(location.pathname)
   }

   // Metodo de location assim que a rota for acionado o Simple SPA chama esse
   // metodo para saber quais APPs podem ser exibidos para a rota acionada
   private location(currApp: MenuModel, findRoute: Function, history: History): Function {
      return (location: Location) => {

         // Verifica se existe alguma APPs para a rota acionada se não tiver
         // chama rota not-found
         if (!findRoute(location)) {
            console.error(location, 'Not Found')
            history.pushState(null, null, '/')
         }
         // verifica se existe alguma restrição da rota para o APP
         if (currApp.routeException && currApp.routeException.find(path => this.show(path, location)))
            return false;

         // Retorna se APP pode ser exibido para a rota
         return !currApp.route || this.show(currApp.route, location, currApp.routeType);

      }
   }

}

export default RegisterService;