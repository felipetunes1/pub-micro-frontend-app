class HtmlBuildTemplateService {
   document: HTMLDocument;
   htmlTemplate: HTMLElement;

   constructor(document: HTMLDocument, templateId: string) {
      this.document = document;
      this.htmlTemplate = document.getElementById(templateId);
   }

   buildTagApplication(name: string): HTMLElement {
      let application = this.document.createElement('application');
      application.setAttribute('name', name);
      return application;

   }

   buildTagRoute(application: HTMLElement, path: string): HTMLElement {
      let route = this.document.createElement('route');
      route.appendChild(application);
      route.setAttribute('path', path);
      return route;

   }
}

export default HtmlBuildTemplateService;
