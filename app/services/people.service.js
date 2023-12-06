angular
  .module('patientApp')
  .service('peopleService', function ($http, apiConfig, $appQuery) {
    this.getAll = function (query = {}) {
      const config = $appQuery.create({
        ...query,
        withRelation: 'occupation'
      });
      return $http.get(`${apiConfig.baseUrl}/people?filter=${config}`);
    }

    this.create = function (person) {
      return $http.post(`${apiConfig.baseUrl}/people`, person);
    }

    this.getById = function (id) {
      return $http.get(`${apiConfig.baseUrl}/people/${id}`);
    }

    this.update = function (id, person) {
      return $http.put(`${apiConfig.baseUrl}/people/${id}`, person);
    }

    this.delete = function (id) {
      return $http.delete(`${apiConfig.baseUrl}/people/${id}`);
    }
  });