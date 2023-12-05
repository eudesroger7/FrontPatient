angular
  .module('patientApp')
  .service('peopleService', function($http, apiConfig, Query) {
    this.getAll = function(query = {}) {
      const config = Query.create({
        ...query,
        withRelation: 'occupation'
      });
      return $http.get(`${apiConfig.baseUrl}people?filter=${config}`);
    }
  });