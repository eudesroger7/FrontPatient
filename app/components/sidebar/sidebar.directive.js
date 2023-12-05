angular.module('sidebar', []);

angular
  .module('sidebar')
  .directive('appSidebar', function () {
    return {
      templateUrl: 'components/sidebar/sidebar.template.html',
      replace: true,
      scope: {
        menus: '='
      }
    }
  });