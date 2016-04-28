(function(){
"use strict";
/**
 * Created by Mikel on 4/21/2016.
 * @Description: Modulo ROOT do Eve Project. Modulo usado no ng-app.
 */
angular
    .module('eve', [
        'eveCore',
        'eveLayout'
    ]);
})();
(function(){
"use strict";
/**
 * Created by Mikel on 4/21/2016.
 * @Description: Coordena todas as funções de Autenticação com o Servidor.
 */
angular
    .module('eveCore')
    .controller('authController', authController);

function authController() {

}
})();
(function(){
"use strict";
/**
 * Created by Mikel on 4/21/2016.
 * @Description: Modulo núcleo do projeto. Listagem de todas as dependências do Eve Project.
 */

angular.module('eveCore', [
	// Dependecies
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngLocale',
	'ngSanitize',
	'ui.router',
	'ui.bootstrap',
	'angular-loading-bar'
]);
})();
(function(){
"use strict";
/**
 * Created by Mikel on 4/21/2016.
 * @Description: Configurador da barra de carregamento para o Eve Project inteiro usando as Promises.
 */
angular
    .module('eveCore')
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);
})();
(function(){
"use strict";
/**
 * Created by Mikel on 4/21/2016.
 * @Description: Configuração das Rotas do Eve Project.
 */
angular
    .module('eveCore')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $injector) {

        // TODO: Configurar o HTML5 mode no servidor.
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise( function($injector) {
            var $state = $injector.get("$state");
            $state.go('eve');
        });

        $stateProvider
        // Root States
            .state('eve', {
                url: '/',
                templateUrl: 'app/home.html',
                controller: 'authController',
                controllerAs: 'eve'
            });
        });
})();
(function(){
"use strict";
/**
 * Created by Mikel on 4/21/2016.
 * @Description: Modulo principal do Layout.
 */
angular.module('eveLayout', []);
})();