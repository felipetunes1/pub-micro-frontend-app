# Login Microfront End

Microfront end responsavel pelo Login do portal do desenvolvedor.

  - Desenvolvido em Angular 9 usando o framework Single-SPA
  - Layout CSS Boostrap + Material Design

Requisitos:

  - NodeJS
  - Browser Qualquer

Tutoriais:

  - [SingleSpa] - Framework para integração de microfrontend em diferentes arquiteturas
  - [Angular] - Framework para desenvolvimento de APPs Web
  - [Webpack] - Framework para empacotamento e build de projetos (sugerido pelo SingleSpa)
  - [Bootstrap] - Framework Bootstrap (não foi usado a biblioteca ngboostrap pois só foi usado o layout grid)
  - [MaterialDesignAngular] - Framework Material Design

# Observações:

Para funcionamento de customProps é necessario configurar os seguintes .ts

  - single-spa-props.ts
    - Acrescentar a função ou property que deseja que o angular acesse

  - main.single-spa.ts
    - alterar de: singleSpaPropsSubject.next(singleSpaProps);
    - para: singleSpaPropsSubject.next(<SingleSpaProps> singleSpaProps);
    - para que não dê erro de compilação ao tentar acessar algum metodo no projeto
    - no .ts que deseja que acesse a customProps é necessario seguir o modelo do src/app/expire/expire.component.ts (SingleSpaProps, Subscription, singleSpaProps$)

Caso o projeto Angular tenha mais de uma rota ou seja acessivel em todas as paginas é necessario:

  1. Todas as paginas:
    a. Incluir uma rota no app-routing.module.ts apontando para "**".
    b. No root application incluir sem uma rota especifica.
  2. Mais de uma rota:
    a. É necessario especificar todas as rotas no app-routing.module.ts
    b. No root application é necessario criar um regex que atenta todas as rotas da aplicação.

Para o single-spa funcionar adequadamente é necessario incluir no app-routing.module.ts o provide APP_BASE_HREF com o valor '/'.

Nas rotas da aplicação é necessario incluir a rota inteira, foram realizados alguns testes usando o inicio da rota no APP_BASE_HREF e não houve um funcionamento correto nos redirecionamento das rotas,

# Como testar

Será usado o npm como exemplo

  1. Execute o comando npm install no console
  2. Execute o comando npm start no conole
    a. Verifique em qual porta o servidor subiu (por padrão esta na porta 9301) 
  3. Clone o projeto [RootApplication]
  4. Execute npm install no console
  5. Altere o arquivo src/modules/service/application.service.ts
    a. Altere o endpoint do app @hdi-seguros/header-app para o sugerido
  6. Execute o comando npm start
  7. Abra o navegar no server do RootApplication (normalmente http://localhost:9000)
  

   [SingleSPA]: <https://single-spa.js.org/docs/ecosystem-angular/>
   [React]: <https://reactjs.org/docs/getting-started.html>
   [RootApplication]: <http://hdixbbs1:7990/projects/BHSM/repos/cor-int-service-manager-root-fe/browse>
   [Webpack]: <https://webpack.js.org/guides/getting-started/>
   [BootstrapReact]: <https://react-bootstrap.github.io/getting-started/introduction>
   [Bootstrap]: <https://getbootstrap.com/docs/4.5/getting-started/introduction/>
   [MaterialDesignReact]: <https://material-ui.com/pt/getting-started/installation/>
   [customProps]: <https://single-spa.js.org/docs/building-applications/#custom-props>
   [Angular]: <https://angular.io/tutorial>
   [MaterialDesignAngular]: <https://material.angular.io/guide/getting-started>
