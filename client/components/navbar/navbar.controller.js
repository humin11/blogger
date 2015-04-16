'use strict';

angular.module('mybloggerApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $translate) {
    $scope.menu = [{
      'title': 'views.navs.Home',
      'link': '/'
    },{
      'title':'views.navs.Message',
      'link':'/message'
    },{
      'title':'views.navs.Blog',
      'link':'/blog'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.changeLanguage = function () {
      $translate.use($scope.key);
    };
  });