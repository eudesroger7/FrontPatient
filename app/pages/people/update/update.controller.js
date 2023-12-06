angular
  .module('people')
  .controller('peopleUpdateCtrl', function (
    $scope,
    $location,
    $appNotify,
    peopleService,
    occupationsResponse,
    personResponse
  ) {
    $scope.occupations = occupationsResponse.data;
    $scope.person = personResponse.data;

    $scope.update = function () {
      peopleService.update($scope.person.id, $scope.person).then(function () {
        $appNotify.show('Pessoa atualizada com sucesso', 'success');
        $location.path(['/people']);
      });
    }
  });