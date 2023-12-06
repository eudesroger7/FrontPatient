angular
  .module('patientApp')
  .factory('$appNotify', function ($mdToast) {
    const _show = function (message = '', type = 'default', delay = 3000) {
      $mdToast.show(
        $mdToast.simple()
        .textContent(message)
        .position('top right')
        .hideDelay(delay)
        .toastClass(`toast-${type}`)
      );
    };

    return {
      show: _show
    }
  });