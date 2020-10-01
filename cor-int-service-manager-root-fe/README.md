# Root Application Microfront End

Microfront end responsavel pelo Root Application do portal do desenvolvedor.

  - NodeJS, HTML e framework Single-SPA
  - Layout CSS Boostrap

Requisitos:

  - [NodeJS]
  - Browser Qualquer

Tutoriais:

  - [SingleSpa] - Framework para integração de microfrontend em diferentes arquiteturas
  - [Webpack] - Framework para empacotamento e build de projetos (sugerido pelo SingleSpa)
  - [Bootstrap] - Framework Bootstrap (não foi usado a biblioteca ngboostrap pois só foi usado o layout grid)

# Aplicações:

  1. index.ejs:
    a. HTML Root que contem todas as dependencias do single spa (systemJs, singleSpa, react, reactDom, bootstrap, material design icon)
    b. o CSS padrão deverá ser importado nessa pagina tambem
    c. contem a configuração inicial para funcionamento do systemjs-importmap
    d. inicializa a aplicação com o comando System.import('@hdi-seguros/root-config');
  2. @hdi-seguros/root-config (hdi-seguros-root-config.js)
    a. Inicializa as chamadas para descobrir as aplicações e suas rotas (inicialmente elas estão mocadas mas futuramente poderão estar em alguma estrutura de dados)
    b. Após o retorno com as rotas realiza o build do Single SPA e assim das paginas
  3. application.service.ts
    a. Service responsavel por listar todas as aplicações que estão liberadas para funcionamento da pagina
    b. é necessario listar todas aplicações devido o navegador guardar um cache e não funcionar se for carregado depois do login (já foram realizados alguns testes e deram esse problema porem por mais que a aplicação tenha sido registrada o single spa só acessa ela se a rota for registrada)
    b. atualmente as aplicações estão mocadas
    c. Estrutura:
      * version: seria a versão da aplicação (já pensando que poderiamos ter microfrontends versionados e trabalhando com pilotos de implantação
      * appId: Id da aplicação, caso tenha algum banco de dados
      * app: Nome da aplicação
      * endpoint: Onde o .js esta aplicado para que o SystemJS possa realizar o import
      * elementName: Em qual elemento da pagina o microfrontend será disponibilizado
      * defaultAttr: não é utilizado
  4. menu.service.ts
     a. Service por retornar as rotas de cada aplicações, foi pensado de trazer de forma separada para que o usuario não possa acessar alguma rota que ele não tenha acesso (será necessario realizar alguns testes para essa funcionalidade)
     b. atualmente as rotas estão mocadas
     c. Estrutura:
      * version: seria a versão da aplicação (já pensando que poderiamos ter microfrontends versionados e trabalhando com pilotos de implantação
      * appId: Id da aplicação, caso tenha algum banco de dados
      * app: Nome da aplicação
      * elementName: Em qual elemento da pagina o microfrontend será disponibilizado
      * route: rota que a aplicação é acessada (se ela deve ser acessada em todas as rotas como é o caso do header/footer/navbar/etc. esse campo deve ser preenchido com null)
      * routeException: caso essa aplicação seja do tipo sem rota (como header/footer/navbar) esse objeto pode ser populado com a lista de rotas de excessão, nesse caso a aplicação não será exibida para essa lista de rotas
      * routeType: 1 - quando a rota assume a opção de aplicar um regex 2 - para quando a rota assume um papel de ...
  5. build.simple-spa.ts
    a. metodo que realiza todo o build da aplicação single SPA
    b. realiza o importMaps das aplicações via SystemJS
    c. Inicializa o single SPA, seu constroi o objeto de rotas e realiza o registro das rotas
  6. html.document.service.ts
    a. Cria o template das rotas na pagina html root de acordo com o retorno do serviço de menus 
    b. importante ter esse template para funcionamento do build de rotas do single spa
  7. register.service.ts
    a. realiza a configuração e registro das aplicações com suas devidas rotas
    b. para que a funcionalidade de regex das rotas funcione corretamente foi sobescrito a activityFn (função responsavel por dizer qual aplicação será exibida para determinada rota) para uma que atenda essa a questão de microfrontend apontando para sub rotas (exemplo: um front aponta para /query-connector e outro front aponta para /query-connector/edit/:id)
    c. caso nao seja encontrada nenhuma applicação para a rota informado a aplicação será redirecionada para a homepage (verificar a possibilidade de criação de uma pagina 404)
    d. as customProps estão especificadas nesse classe tambem sendo:
       * menus: (não será usado mais esse objeto e sim o de retorno do login)
       * envs: Opções para dizer se esta atuando em qual ambiente (verificar a possibilidade de não ser usado dessa forma e sim opções de menus diferentes para que o controle fique melhor de acordo com as permissões de menu)
       * getEnv: em qual ambiente esta sendo atuando
       * setEnv: alterar ambiente que esta atuando
       * getNotifications: lista todas as notificações que o usuario receber
       * setNotificationHeaderAdd: adiciona função como listenner para caso tenha alguma nova notificação ou caso alguma notificação seja removida
       * addNotification: adicional novas notificações (frontend de notificações é responsavel por adicional) e aciona todos os listener
       * removeNotification: remove a notificação (frontend de notificações e header são os responsaveis por essa remoção) e aciona todos os listener
       * registerLoggedIn: registra função para usuario logado (hoje o header e o notificações estao como listenner para inicializar e habilitar as notificações, futuramente será necessario colocar o menu como listener)
       * callLogedIn: cria session e aciona todos os listenner para executar seus inicializadores de usuario logado
       * callLogedOut: destroi session e aciona todos os listenner para executar seus destruidores de usuario logado
       * getLoggin: pega usuario logado (pensei em deixar aqui para que a key da sessionStorage não fique perdida em muitos microfrontends e se no futuro alterar essa key fica mais facil a manutenção)

# Incluir nova aplicação:

  1. Adicionar aplicação na lista application.service.ts
  2. Adicionar rota na lista menu.service.ts
  3. Se for uma opção de menu será necessario adicionar tambem no microfrontend [Navbar] [App.js][menuResponse]

# Observações:

  1. Foi alterado a forma de como se acessa as rotas, por padrão o SingleSPA usa ... para pegar a rota, foi sobescrito essa funcionalidade na classe register.service.ts para pegar a rota de acordo com uma configuração regex, dessa forma é possivel que tenhamos um microfrontend que aponta para /query-connector e outro que aponte para /query-connector/:id/edit e ate mesmo /query-connector/new.
    a. Dessa forma tambem não perdemos a possibilidade de ser criado uma unica aplicação que funcionaria para todas as rotas sendo necessario apenas alterar a propriedade routeType do mock na classe menu.service.ts para 2
    b. Outra possibilidade seria criar um regex para atender todas as rotas, como foi feito na edição para o orquestrador generico no qual temos 3 rotas na mesma aplicação
  2. Para facilitar a subida de todos as aplicações pode ser usado o node_module concurrently executando o seguinte comando "concurrently --kill-others \"npm run --prefix [path-to-folder] [commando-to-start]\"" onde pode ser colocado n "npm run"


# Como testar

Será usado o npm como exemplo

  1. Execute o comando npm install no console
  2. Execute o comando npm start no console
  7. Abra o navegar no server do RootApplication (normalmente http://localhost:9000)
  

   [SingleSPA]: <https://single-spa.js.org/docs/configuration>
   [React]: <https://reactjs.org/docs/getting-started.html>
   [RootApplication]: <http://hdixbbs1:7990/projects/BHSM/repos/cor-int-service-manager-root-fe/browse>
   [Webpack]: <https://webpack.js.org/guides/getting-started/>
   [BootstrapReact]: <https://react-bootstrap.github.io/getting-started/introduction>
   [Bootstrap]: <https://getbootstrap.com/docs/4.5/getting-started/introduction/>
   [MaterialDesignReact]: <https://material-ui.com/pt/getting-started/installation/>
   [customProps]: <https://single-spa.js.org/docs/building-applications/#custom-props>
   [Angular]: <https://angular.io/tutorial>
   [MaterialDesignAngular]: <https://material.angular.io/guide/getting-started>
   [Navbar]: <http://hdixbbs1:7990/projects/BHSM/repos/cor-int-service-manager-navbar-fe/browse?at=refs/heads/feature/initial>
   [NodeJS]: <https://nodejs.org/en/docs/guides/getting-started-guide/>
