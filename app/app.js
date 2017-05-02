'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'b2',
  'home'
])
.config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/home', {
        templateUrl: '/features/home/home.html',
        currentNavItem:'home',
        controller: 'homeCtrl'
    }).when('/b2', {
        templateUrl: '/features/b2/b2.html',
        currentNavItem: 'b2',
        controller: 'b2Ctrl'
    }).otherwise({
        redirectTo: '/home'
    })
}])
.controller('myAppCtrl', function ($scope) {
        $scope.currentNavItem="home";
    })
