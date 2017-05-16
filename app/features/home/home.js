'use strict';

angular.module('home', ['ngRoute','ngMaterial','myApp'])


    .controller('homeCtrl', ['myAppService',function(myAppService) {
      myAppService.navItem='home';
      return myAppService.navItem;

    }]);
