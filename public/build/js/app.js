(function(){
"use strict";
/**
 * Created by Mikel on 4/21/2016.
 * @Description: Modulo ROOT do Eve Project. Modulo usado no ng-app.
 */
angular
    .module('eve', [
        'eveCore',
        'eveLayout',
        'eveAnimations'
    ]);
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
 * @Description: Modulo principal do Layout.
 */
angular.module('eveLayout', []);
})();
(function () {
    "use strict";
    /**
     * Created by mikel on 4/28/2016.
     */
    angular.module('eveAnimations', []);
})();
(function () {
    "use strict";
    /**
     * Created by mikel on 4/28/2016.
     */
    angular
        .module('eveAnimations')
        .controller('act05Controller', act05Controller);

    function act05Controller() {
        var animation = this;

        var canvas, stage, exportRoot;
        animation.start = function () {
            // --- write your JS code here ---

            canvas = document.getElementById("canvas");
            images = images || {};
            ss = ss || {};

            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", handleFileLoad);
            loader.addEventListener("complete", handleComplete);
            loader.loadFile({
                src: "images/evestory.v01_atlas_.json?1461889042115",
                type: "spritesheet",
                id: "evestory.v01_atlas_"
            }, true);
            loader.loadManifest(lib.properties.manifest);
        };

        animation.start();

        function handleFileLoad(evt) {
            if (evt.item.type == "image") {
                images[evt.item.id] = evt.result;
            }
        }

        function handleComplete(evt) {
            var queue = evt.target;
            ss["evestory.v01_atlas_"] = queue.getResult("evestory.v01_atlas_");
            exportRoot = new lib.evestoryv01();

            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }
    }
})();
(function () {
    "use strict";
    /**
     * Created by mikel on 4/28/2016.
     */
    angular.module('eveAnimations', []);
})();
(function () {
    "use strict";
    /**
     * Created by mikel on 4/28/2016.
     */
    angular
        .module('eveAnimations')
        .controller('act05Controller', act05Controller);

    function act05Controller() {
        var animation = this;

        var canvas, stage, exportRoot;
        animation.start = function () {
            // --- write your JS code here ---

            canvas = document.getElementById("canvas");
            images = images || {};
            ss = ss || {};

            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", handleFileLoad);
            loader.addEventListener("complete", handleComplete);
            loader.loadFile({
                src: "images/evestory.v01_atlas_.json?1461889042115",
                type: "spritesheet",
                id: "evestory.v01_atlas_"
            }, true);
            loader.loadManifest(lib.properties.manifest);
        };

        animation.start();

        function handleFileLoad(evt) {
            if (evt.item.type == "image") {
                images[evt.item.id] = evt.result;
            }
        }

        function handleComplete(evt) {
            var queue = evt.target;
            ss["evestory.v01_atlas_"] = queue.getResult("evestory.v01_atlas_");
            exportRoot = new lib.evestoryv01();

            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }
    }
})();