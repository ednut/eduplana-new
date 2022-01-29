angular.module('myApp.controllers', []);
angular.module('myApp.models', []);
var myApp = angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.models'
]);

// myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) { // use this in production
myApp.config(function ($stateProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true);
  // $urlRouterProvider.otherwise(function($injector) {
  // 	$injector.invoke(function($state) {
  // 			$state.transitionTo("404", {}, false);
  // 	});
  // }); // use in production

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })

    .state('aboutus', {
      url: '/about',
      templateUrl: 'partials/aboutUS.html'
    })

    .state('documents', {
      url: '/documents',
      templateUrl: 'partials/documents.html'
    })

    .state('infographics', {
      url: '/infographics',
      templateUrl: 'partials/infographics.html'
    })

    .state('data', {
      url: '/data',
      templateUrl: 'partials/data.html'
    })

    .state('404', {
      templateUrl: 'partials/404.html'
    });
});
