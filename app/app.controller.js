angular
  .module('patientApp')
  .controller('appCtrl', function (
    $scope,
  ) {
    $scope.menus = [
      {
        title: 'Pessoas',
        path: 'people',
        icon: 'group'
      },
      {
        title: 'Profissões',
        path: 'occupations',
        icon: 'badge'
      }
    ];
  });