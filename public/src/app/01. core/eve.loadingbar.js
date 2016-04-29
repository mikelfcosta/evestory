/**
 * Created by Mikel on 4/21/2016.
 * @Description: Configurador da barra de carregamento para o Eve Project inteiro usando as Promises.
 */
angular
    .module('eveCore')
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);
