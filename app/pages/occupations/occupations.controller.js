angular
  .module('occupations', [
    'table'
  ]);
  
angular
  .module('occupations')
  .controller('occupationsCtrl', function (
    $scope,
    $location,
    $appNotify,
    $appDialog,
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

    $scope.edit = function (event) {
      event.stopPropagation();
      const id = event.srcElement.parentElement.dataset.rowId;
      $location.path([`/occupations/update/${id}`])
    }

    $scope.delete = function (event) {
      event.stopPropagation();
      const id = event.srcElement.parentElement.dataset.rowId;
      const occupation = $scope.occupations.find(item => item.id == id);
      $appDialog.confirm({
        title: 'Excluir profissão',
        message: `Deseja excluir a profissão ${occupation.name}? Essa ação não pode ser desfeita.`,
        confirmButtonLabel: 'Quero excluir',
        cancelButtonLabel: 'Manter profissão'
      }).then(function () {
        occupationsService.delete(id).then(function () {
          $appNotify.show('Profissão deletada com sucesso', 'success');
          $scope.getAllOccupations();
        });
      });
    }

    $scope.openDetails = function (event) {
      event.stopPropagation();
      const id = event.srcElement.parentElement.dataset.rowId;
      $scope.currentDetails = $scope.occupations.find(item => item.id == id);

      $appDialog.fromTemplate({
        templateUrl: '/pages/occupations/details/details.template.html',
        controller: 'occupationsDetailsCtrl',
        scope: $scope,
      });
    }

    const init = function () {
      $scope.getAllOccupations();
    }

    init();
  });