angular
  .module('people')
  .controller('peopleDetailsCtrl', function ($scope, $mdDialog) {
    $scope.close = function () {
      $mdDialog.cancel();
    }
  });