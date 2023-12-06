angular
  .module('patientApp')
  .factory('$appDialog', function ($mdDialog) {
    const _confirm = function ({
      title,
      message,
      confirmButtonLabel,
      cancelButtonLabel
    }) {
      const dialog = $mdDialog.confirm()
        .title(title || '')
        .htmlContent(`<p class="dialog-confirm-message">${message}</p>`)
        .ok(confirmButtonLabel || 'Confirmar')
        .cancel(cancelButtonLabel || 'Cancelar');
  
      return $mdDialog.show(dialog)
    }

    const _fromTemplate = function ({
      templateUrl,
      controller,
      clickOutsideToClose,
      fullscreen,
      scope
    }) {
      $mdDialog.show({
        templateUrl,
        controller,
        parent: angular.element(document.body),
        clickOutsideToClose: clickOutsideToClose || true,
        fullscreen,
        scope,
        preserveScope: true
      })
    }

    return {
      confirm: _confirm,
      fromTemplate: _fromTemplate
    }
  });