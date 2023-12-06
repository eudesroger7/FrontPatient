angular.module('navbar', []);

angular
  .module('navbar')
  .directive('appNavbar', ['$mdDialog', function ($mdDialog) {
    return {
      templateUrl: 'components/navbar/navbar.template.html',
      replace: true,
      link: function ($scope) {
        $scope.openAccountMenu = function($mdMenu, ev) {
          $mdMenu.open(ev);
        };
      }
    }
  }]);