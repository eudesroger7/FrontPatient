angular
  .module('occupations')
  .controller('occupationsUpdateCtrl', function (
    $scope,
    $location,
    occupationsService,
    $appNotify,
    occupationResponse
  ) {
    $scope.occupation = occupationResponse.data;
    
    $scope.update = function () {
      occupationsService.update($scope.occupation.id, $scope.occupation).then(function (response) {
        $appNotify.show('Profissão atualizada com sucesso', 'success');
        $location.path(['/occupations']);
      });
    }
  });