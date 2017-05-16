'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'b2',
  'home',
  'ui.router'
])
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
    function($stateProvider,$urlRouterProvider,$locationProvider) {
      var homeState = {
        name:'home',
        url:'/home',
        controller:'homeCtrl',
        templateUrl:'/features/home/home.html',
        resolve: {
          navLink: function(myAppService) {
            myAppService.NavItem='home';
        }
      }
    }
      var b2State = {
        name:'b2',
        url:'/b2',
        controller:'b2Ctrl',
        templateUrl:'/features/b2/b2.html',
        resolve: {
          navLink: function(myAppService) {
            myAppService.NavItem='b2';
          }
        }
      }
      $stateProvider.state(homeState);
      $stateProvider.state(b2State);
      $urlRouterProvider.otherwise('home');
      $locationProvider.hashPrefix('');
}])
.controller('myAppCtrl', function ($scope,myAppService) {
    $scope.currentNavItem=myAppService.navItem;
    })
.factory('myAppService',function(){
    this.navItem ={};
    return this.navItem;
})
