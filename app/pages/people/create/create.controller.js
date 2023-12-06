angular
  .module('people')
  .controller('peopleCreateCtrl', function (
    $scope,
    $location,
    $appNotify,
    peopleService,
    occupationResponse
  ) {
    $scope.occupations = occupationResponse.data;

    $scope.save = function () {
      peopleService.create($scope.person).then(function () {
        $appNotify.show('Pessoa criada com sucesso', 'success');
        $location.path(['/people']);
      });
    }
  });