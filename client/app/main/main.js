'use strict';

angular.module('mybloggerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
	        translation: function(RequireTranslations) {
	          return RequireTranslations('page/home');
	        }
	      }
      });
  });