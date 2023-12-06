angular
  .module('people', [
    'table'
  ]);
  
angular
  .module('people')
  .controller('peopleCtrl', function (
    $scope,
    $location,
    $filter,
    $appDialog,
    $appNotify,
    $appFormat,
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
      { header: 'Observações', orderBy: 'comments', keyValue: 'limitedComments' },
    ];

    $scope.getAllPeople = function () {
      peopleService.getAll($scope.query).then(function (response) {
        $scope.people = response.data.map(item => ({
          ...item,
          limitedComments: (item.comments && item.comments.length > 30) ? `${$filter('limitTo')(item.comments, 30)}...` : item.comments,
          dateOfBirth: $appFormat.dateEnToBr(item.dateOfBirth),
          cpf: $appFormat.cpf(item.cpf),
          phone: $appFormat.phone(item.phone),
          occupationName: `#${item.occupationId} - ${item.occupation ? item.occupation.name : ''}`
        }));
      })
    }

    $scope.edit = function (event) {
      event.stopPropagation();
      const id = getRowIdBy(event);
      $location.path([`/people/update/${id}`])
    }

    $scope.delete = function (event) {
      event.stopPropagation();
      const id = getRowIdBy(event);
      const person = $scope.people.find(item => item.id == id);
      $appDialog.confirm({
        title: 'Excluir pessoa',
        message: `Deseja excluir a pessoa ${person.name}? Essa ação não pode ser desfeita.`,
        confirmButtonLabel: 'Sim, excluir',
        cancelButtonLabel: 'Cancelar'
      }).then(function () {
        peopleService.delete(id).then(function () {
          $appNotify.show('Pessoa deletada com sucesso', 'success');
          $scope.getAllPeople();
        });
      });
    }

    $scope.openDetails = function (event) {
      event.stopPropagation();
      const id = getRowIdBy(event);
      $scope.currentDetails = $scope.people.find(item => item.id == id);

      $appDialog.fromTemplate({
        templateUrl: '/pages/people/details/details.template.html',
        controller: 'peopleDetailsCtrl',
        scope: $scope,
      });
    }

    const getRowIdBy = function (event) {
      let id = event.srcElement.parentElement.dataset.rowId;
      if (!id) id = event.srcElement.parentElement.parentElement.dataset.rowId;
      return id;
    }

    const init = function () {
      $scope.getAllPeople();
    }

    init();
  });