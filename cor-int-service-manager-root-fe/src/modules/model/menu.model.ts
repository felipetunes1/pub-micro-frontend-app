interface MenuModel {
   version: number;
   appId: number;
   app: string;
   elementName: string;
   route: string;
   routeException: Array<string>;
   routeType: number;

}

export default MenuModel;