// Config Interface
// config = {
//   order: 'field'|'-field',
//   withRelation: 'relation',
//   relationFields: {},
//   search: {
//     value: 'value',
//     fields: ['field','field']
//   }
// }

angular
  .module('patientApp')
  .factory('$appQuery', function () {
    const _create = function ({
      order,
      withRelation,
      relationFields,
      search
    }) {
      let _query = {};

      if (order) {
        const hasDash = order.includes('-');
        _query.order = `${order.replace('-','')} ${hasDash ? 'ASC' : 'DESC'}`;
      }
      if (withRelation) {
        _query = {
          ..._query,
          include: [{
            relation: withRelation,
            scope: relationFields
              ? { fields: relationFields } 
              : {}
          }]
        }
      }
      if (
        search
        && search.value
        && search.fields
        && search.fields.length > 0
      ) {
        _query = {
          ..._query,
          where: search.fields.length > 1
            ? {
              'or': search.fields.map(field => ({
                [field]: {
                  'ilike': `%25${search.value}%25`
                }
              }))
            }
            : {
              [search.fields[0]]: {
                'ilike': `%25${search.value}%25`
              }
            }
        }
      }

      return JSON.stringify(_query);
    }

    return {
      create: _create
    }
  });
