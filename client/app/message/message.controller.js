'use strict';

angular.module('mybloggerApp')
  .controller('MessageCtrl', function ($scope, $http, socket) {
    $scope.messages = [];

    $http.get('/api/messages').success(function(awesomeThings) {
      console.log(awesomeThings);
      $scope.messages = awesomeThings;
      socket.syncUpdates('message', $scope.messages);
    });

    $scope.addMessage = function() {
      if($scope.name === '') {
        return;
      }
      $http.post('/api/messages', { name: $scope.name, create_at: new Date(), info: $scope.info });
      $scope.name = '';
      $scope.info = '';
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + message._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('message');
    });

  });
