angular.module('table', ['md.data.table']);

angular
  .module('table')
  .directive('appTable', function () {
    return {
      templateUrl: 'components/table/table.template.html',
      replace: true,
      scope: {
        data: '=',
        columns: '=',
        selected: '=',
        getData: '=',
        query: '='
      }
    }
  });
