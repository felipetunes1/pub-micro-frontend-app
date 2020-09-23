class RegisterModel {
   name: string;
   app: any;
   activityFn: Function;
   customProps: any;

   constructor(name: string, app: any, activityFn: Function, customProps = null) {
      this.name = name;
      this.app = app;
      this.activityFn = activityFn;
      this.customProps = customProps;

   }
}

export default RegisterModel;
