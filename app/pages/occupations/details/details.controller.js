angular
  .module('occupations')
  .controller('occupationsDetailsCtrl', function (
    $scope,
    occupationsService
  ) {
    console.log($scope.currentDetails)

    const getPeopleCount = function () {
      occupationsService.getPeopleCountById($scope.currentDetails.id)
        .then(function (response) {
          console.log(response);
          $scope.peopleCount = response.data.count;
        });
    }

    const init = function () {
      getPeopleCount();
    }

    init();
  });