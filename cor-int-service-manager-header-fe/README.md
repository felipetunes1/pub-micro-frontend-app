# Header Microfront End

Microfront end responsavel pelo Header do portal do desenvolvedor.

  - Desenvolvido em REACT usando o framework Single-SPA
  - Layout CSS Boostrap + Material Design

Requisitos:

  - NodeJS
  - Browser Qualquer

Tutoriais:

  - [SingleSpa] - Framework para integração de microfrontend em diferentes arquiteturas
  - [React] - Framework para desenvolvimento de APPs Web
  - [Webpack] - Framework para empacotamento e build de projetos (sugerido pelo SingleSpa)
  - [BootstrapReact] - Framework Bootstrap com tags React
  - [MaterialDesignReact] - Framework Material Design com tags React

# Notification

O Header não é responsavel pelas notificações, existe um microfrontend com essa responsabilidade, ele apenas acessa o resultado desse front via [customProps] (getNotifications).

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
  

   [SingleSPA]: <https://single-spa.js.org/docs/ecosystem-react/>
   [React]: <https://reactjs.org/docs/getting-started.html>
   [RootApplication]: <http://hdixbbs1:7990/projects/BHSM/repos/cor-int-service-manager-root-fe/browse>
   [Webpack]: <https://webpack.js.org/guides/getting-started/>
   [BootstrapReact]: <https://react-bootstrap.github.io/getting-started/introduction>
   [MaterialDesignReact]: <https://material-ui.com/pt/getting-started/installation/>
   [customProps]: <https://single-spa.js.org/docs/building-applications/#custom-props>
