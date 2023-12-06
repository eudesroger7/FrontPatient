angular
  .module('people')
  .controller('peopleUpdateCtrl', function (
    $scope,
    $location,
    $appNotify,
    $appFormat,
    peopleService,
    occupationsResponse,
    personResponse
  ) {
    $scope.occupations = occupationsResponse.data;
    $scope.person = personResponse.data;
    $scope.person.dateOfBirth = $appFormat.dateEnToBr($scope.person.dateOfBirth);

    $scope.update = function () {
      $scope.person.dateOfBirth = $appFormat.dateBrToEn($appFormat.dateBr($scope.person.dateOfBirth));
      peopleService.update($scope.person.id, $scope.person).then(function () {
        $appNotify.show('Pessoa atualizada com sucesso', 'success');
        $location.path(['/people']);
      });
    }
  });