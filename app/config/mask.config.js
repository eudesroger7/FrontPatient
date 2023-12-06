angular
  .module('patientApp')
  .config(['uiMask.ConfigProvider', function(uiMaskConfigProvider) {
    uiMaskConfigProvider.addDefaultPlaceholder(false);
  }]);