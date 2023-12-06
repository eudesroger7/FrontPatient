angular
  .module('people')
  .controller('peopleCreateCtrl', function (
    $scope,
    $location,
    $appNotify,
    $appFormat,
    peopleService,
    occupationResponse
  ) {
    $scope.occupations = occupationResponse.data;

    $scope.save = function () {
      $scope.person.dateOfBirth = $appFormat.dateBrToEn($appFormat.dateBr($scope.person.dateOfBirth));
      peopleService.create($scope.person).then(function () {
        $appNotify.show('Pessoa criada com sucesso', 'success');
        $location.path(['/people']);
      });
    }
  });