var nossoSistemaApp = angular.module('nossoSistemaApp', [
  	'ngRoute',
    'nossoSistema.services',
    'nossoSistema.localize',
    'nossoSistema.ribbon',
    'nossoSistema.navigation',
    'nossoSistema.activity',
    'nossoSistema.action',
    'nossoSistema.validation',
    'angular-jquery-maskedinput'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/dashboard', {
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardController'
  })
  .when('/oleo/receber-carro', {
    templateUrl: 'views/oleo/receber-carro.html',
    controller: 'OleoReceberCarroController'
  })
  .otherwise({
    redirectTo: '/dashboard'
  });;

}]);

nossoSistemaApp.run(['settings', function(settings) {
  settings.currentLang = settings.languages[5]; // pt-br
}])