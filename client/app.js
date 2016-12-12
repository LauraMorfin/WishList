var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    controller:'ItemsController',
    templateUrl: 'views/items.html'
  })
  .when('/items', {
    controller: 'ItemsController',
    templateUrl: 'views/items.html'
  })
  .when('/items/details/:id',{
    controller: 'ItemsController',
    templateUrl: 'views/item_details.html'
  })
  .when('/items/add',{
    controller:'ItemsController',
    templateUrl:'views/add_item.html'
  })
  .when('/items/edit/:id', {
    controller: 'ItemsController',
    templateUrl: 'views/edit_item.html'
  })
  .otherwise({
    redirectTo:'/'
  });
});
