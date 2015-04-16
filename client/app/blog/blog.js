'use strict';

angular.module('mybloggerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blog', {
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl'
      });
  });
