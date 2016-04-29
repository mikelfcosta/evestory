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
            })
            .state('animations', {
                url: '/animation',
                abstract: true,
                templateUrl: 'app/animations/layout.html'
            })
            .state('animations.act05', {
                url: '/act05',
                templateUrl: 'app/animations/act05.html',
                controller: 'act05Controller',
                controllerAs: 'animation'
            })
    })
    .run(function ($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });