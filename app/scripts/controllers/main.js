'use strict';

angular.module('secretaryApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.btnName = '저장하기';

    $scope.submit = function() {
      var email = $scope.email,
        todo = $scope.todo,
        msg = "";

      console.log(email, todo);

      $scope.msg = '네 알겠습니다. <span class="label label-theme-red">' + todo + '</span>을 기억하고 있겠습니다.';

    };

  });
