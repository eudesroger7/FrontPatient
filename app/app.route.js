angular
  .module('patientApp')
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/people', {
          templateUrl: 'pages/people/people.template.html',
          controller: 'peopleCtrl'
        })
        .when('/occupations/create', {
          templateUrl: 'pages/occupations/create/create.template.html',
          controller: 'occupationsCreateCtrl'
        })
        .when('/occupations', {
          templateUrl: 'pages/occupations/occupations.template.html',
          controller: 'occupationsCtrl'
        })
        .otherwise('/people');
    }
  ]);