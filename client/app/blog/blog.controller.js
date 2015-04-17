'use strict';

angular.module('mybloggerApp')
  .controller('BlogCtrl', function ($scope, $http, socket) {
    $scope.blogs = [];

    $http.get('/api/blogs').success(function(awesomeThings) {
      console.log(awesomeThings);
      $scope.blogs = awesomeThings;
      socket.syncUpdates('blog', $scope.blogs);
    });

    $scope.addBlog = function() {
      if($scope.title === '') {
        return;
      }
      $http.post('/api/blogs', { title: $scope.title, create_at: new Date(), content: $scope.content });
      $scope.title = '';
      $scope.content = '';
    };

    $scope.deleteBlog = function(blog) {
      $http.delete('/api/blogs/' + blog._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('blog');
    });
  });
