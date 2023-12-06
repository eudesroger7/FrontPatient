angular
  .module('patientApp')
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/people/update/:id', {
          templateUrl: 'pages/people/update/update.template.html',
          controller: 'peopleUpdateCtrl',
          resolve: {
            occupationsResponse: function (occupationsService) {
              return occupationsService.getAll({ order: '-name' });
            },
            personResponse: function (peopleService, $route) {
              return peopleService.getById($route.current.params.id);
            }
          }
        })
        .when('/people/create', {
          templateUrl: 'pages/people/create/create.template.html',
          controller: 'peopleCreateCtrl',
          resolve: {
            occupationResponse: function (occupationsService) {
              return occupationsService.getAll({ order: '-name' });
            }
          }
        })
        .when('/people', {
          templateUrl: 'pages/people/people.template.html',
          controller: 'peopleCtrl'
        })
        .when('/occupations/update/:id', {
          templateUrl: 'pages/occupations/update/update.template.html',
          controller: 'occupationsUpdateCtrl',
          resolve: {
            occupationResponse: function (occupationsService, $route) {
              return occupationsService.getById($route.current.params.id);
            }
          }
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