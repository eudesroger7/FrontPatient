angular
  .module('patientApp')
  .service('occupationsService', function ($http, apiConfig, $appQuery) {
    this.getAll = function (query = {}) {
      const config = $appQuery.create({
        ...query
      });
      return $http.get(`${apiConfig.baseUrl}/occupations?filter=${config}`);
    }

    this.create = function (occupation) {
      return $http.post(`${apiConfig.baseUrl}/occupations`, occupation);
    }

    this.getById = function (id) {
      return $http.get(`${apiConfig.baseUrl}/occupations/${id}`);
    }

    this.update = function (id, occupation) {
      return $http.put(`${apiConfig.baseUrl}/occupations/${id}`, occupation);
    }

    this.delete = function (id) {
      return $http.delete(`${apiConfig.baseUrl}/occupations/${id}`);
    }

    this.getPeopleCountById = function (id) {
      const query = {
        occupationId: id
      }
      return $http.get(`${apiConfig.baseUrl}/people/count?where=${JSON.stringify(query)}`)
    }
  });