angular
  .module('occupations')
  .controller('occupationsDetailsCtrl', function ($scope, $mdDialog) {
    $scope.close = function () {
      $mdDialog.cancel();
    }
  });