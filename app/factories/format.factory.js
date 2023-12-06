angular
  .module('patientApp')
  .factory('$appFormat', function () {
    const _formatCpf = function (cpf) {
      cpf = cpf.replace(/[^0-9]+/g, '');
      return `${cpf.substring(0,3)}.${cpf.substring(3,6)}.${cpf.substring(6,9)}-${cpf.substring(9)}`
    }

    const _formatPhone = function (phone) {
      phone = phone.replace(/[^0-9]+/g, '');
      return `(${phone.substring(0,2)}) ${phone.substring(2,7)}-${phone.substring(7)}`
    }

    const _formatDateBr = function (date) {
      date = date.replace(/[^0-9]+/g, '');
      return `${date.substring(0,2)}/${date.substring(2,4)}/${date.substring(4)}`
    }

    const _formatDateEnToBr = function (date) {
      return date.split('-').reverse().join('/');
    }

    const _formatDateBrToEn = function (date) {
      return date.split('/').reverse().join('-');
    }

    return {
      cpf: _formatCpf,
      phone: _formatPhone,
      dateEnToBr: _formatDateEnToBr,
      dateBrToEn: _formatDateBrToEn,
      dateBr: _formatDateBr,
    }
  });