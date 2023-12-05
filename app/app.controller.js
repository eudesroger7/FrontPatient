angular
  .module('patientApp')
  .controller('appCtrl', function(
    $scope,
  ) {
    $scope.menus = [
      {
        title: 'People',
        path: 'people'
      },
      {
        title: 'Occupations',
        path: 'occupations'
      }
    ];
  });