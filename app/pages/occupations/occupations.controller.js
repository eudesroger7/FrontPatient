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
      },
      withRelation: 'people',
      relationFields: {
        id: true,
        occupationId: true
      }
    };
    $scope.tableColumns = [
      { header: 'Nome', orderBy: 'name', keyValue: 'name' },
      { header: 'Pessoas Vinculadas', keyValue: 'peopleCount' },
    ];

    $scope.getAllOccupations = function () {
      occupationsService.getAll($scope.query).then(function (response) {
        $scope.occupations = response.data.map(item => ({
          ...item,
          peopleCount: item.people ? item.people.length : 0
        }));
      })
    }

    $scope.edit = function (event) {
      event.stopPropagation();
      const id = getRowIdBy(event);
      $location.path([`/occupations/update/${id}`])
    }

    $scope.delete = function (event) {
      event.stopPropagation();
      const id = getRowIdBy(event);
      const occupation = $scope.occupations.find(item => item.id == id);
      $appDialog.confirm({
        title: 'Excluir profissão',
        message: `Deseja excluir a profissão ${occupation.name}? Essa ação não pode ser desfeita.`,
        confirmButtonLabel: 'Sim, excluir',
        cancelButtonLabel: 'Cancelar'
      }).then(function () {
        occupationsService.delete(id).then(function () {
          $appNotify.show('Profissão deletada com sucesso', 'success');
          $scope.getAllOccupations();
        });
      });
    }

    $scope.openDetails = function (event) {
      event.stopPropagation();
      const id = getRowIdBy(event);
      $scope.currentDetails = $scope.occupations.find(item => item.id == id);

      $appDialog.fromTemplate({
        templateUrl: '/pages/occupations/details/details.template.html',
        controller: 'occupationsDetailsCtrl',
        scope: $scope,
      });
    }

    const getRowIdBy = function (event) {
      let id = event.srcElement.parentElement.dataset.rowId;
      if (!id) id = event.srcElement.parentElement.parentElement.dataset.rowId;
      return id;
    }

    const init = function () {
      $scope.getAllOccupations();
    }

    init();
  });