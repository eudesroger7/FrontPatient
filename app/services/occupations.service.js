angular
  .module('patientApp')
  .service('occupationsService', function($http, apiConfig, Query) {
    this.getAll = function(query = {}) {
      const config = Query.create({
        ...query
      });
      return $http.get(`${apiConfig.baseUrl}occupations?filter=${config}`);
    }
  });