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