angular
  .module('people', [
    'table'
  ]);
  
angular
  .module('people')
  .controller('peopleCtrl', function(
    $scope,
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
          occupationName: item.occupation.name
        }));
      })
    }

    const init = function () {
      $scope.getAllPeople();
    }

    init();
  });