angular
  .module('occupations')
  .controller('occupationsCreateCtrl', function(
    $scope,
    occupationsService
  ) {
    $scope.selected = [];
    $scope.query = {
      order: '-name',
      search: {
        value: '',
        fields: ['name']
      }
    };
    $scope.tableColumns = [
      { header: 'Nome', orderBy: 'name', keyValue: 'name' }
    ];

    $scope.getAllOccupations = function () {
      occupationsService.getAll($scope.query).then(function (response) {
        $scope.occupations = response.data;
      })
    }

    const init = function () {
      $scope.getAllOccupations();
    }

    init();
  });