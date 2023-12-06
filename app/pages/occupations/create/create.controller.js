angular
  .module('occupations')
  .controller('occupationsCreateCtrl', function (
    $scope,
    $location,
    occupationsService,
    $appNotify
  ) {
    $scope.save = function () {
      occupationsService.create($scope.occupation).then(function (response) {
        $appNotify.show('Profissão criada com sucesso', 'success');
        $location.path(['/occupations']);
      });
    }
  });