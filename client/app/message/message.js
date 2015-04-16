'use strict';

angular.module('mybloggerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/message', {
        templateUrl: 'app/message/message.html',
        controller: 'MessageCtrl'
      });
  });
