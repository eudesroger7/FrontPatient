angular
  .module('people', [
    'table'
  ]);
  
angular
  .module('people')
  .controller('peopleCtrl', function (
    $scope,
    $location,
    $appDialog,
    $appNotify,
    peopleService
  ) {
    $scope.selected = [];
    $scope.query = {
      order: '-name',
      search: {
        value: '',
        fields: ['name','dateOfBirth','cpf','phone','comments']
      }
    };
    $scope.tableColumns = [
      { header: 'Nome', orderBy: 'name', keyValue: 'name' },
      { header: 'Data de Nascimento', orderBy: 'dateOfBirth', keyValue: 'dateOfBirth' },
      { header: 'CPF', orderBy: 'cpf', keyValue: 'cpf' },
      { header: 'Telefone', orderBy: 'phone', keyValue: 'phone' },
      { header: 'Profissão', keyValue: 'occupationName' },
      { header: 'Observações', orderBy: 'comments', keyValue: 'comments' },
    ];

    $scope.getAllPeople = function () {
      peopleService.getAll($scope.query).then(function (response) {
        $scope.people = response.data.map(item => ({
          ...item,
          occupationName: `#${item.occupationId} - ${item.occupation ? item.occupation.name : ''}`
        }));
      })
    }

    $scope.edit = function (event) {
      event.stopPropagation();
      const id = event.srcElement.parentElement.dataset.rowId;
      $location.path([`/people/update/${id}`])
    }

    $scope.delete = function (event) {
      event.stopPropagation();
      const id = event.srcElement.parentElement.dataset.rowId;
      const person = $scope.people.find(item => item.id == id);
      $appDialog.confirm({
        title: 'Excluir pessoa',
        message: `Deseja excluir a pessoa ${person.name}? Essa ação não pode ser desfeita.`,
        confirmButtonLabel: 'Quero excluir',
        cancelButtonLabel: 'Manter pessoa'
      }).then(function () {
        peopleService.delete(id).then(function () {
          $appNotify.show('Pessoa deletada com sucesso', 'success');
          $scope.getAllPeople();
        });
      });
    }

    $scope.openDetails = function (event) {
      event.stopPropagation();
      const id = event.srcElement.parentElement.dataset.rowId;
      $scope.currentDetails = $scope.people.find(item => item.id == id);
      console.log($scope)

      $appDialog.fromTemplate({
        templateUrl: '/pages/people/details/details.template.html',
        controller: 'peopleDetailsCtrl',
        scope: $scope,
      });
    }

    const init = function () {
      $scope.getAllPeople();
    }

    init();
  });