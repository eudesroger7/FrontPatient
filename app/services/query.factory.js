// Config Interface
// config = {
//   order: 'field'|'-field',
//   withRelation: 'relation',
//   search: {
//     value: 'value',
//     fields: ['field','field']
//   }
// }

angular.module('patientApp').factory('Query', function () {
  const _create = function (config) {
    let _query = {};

    if (config.order) {
      const hasDash = config.order.includes('-');
      _query.order = `${config.order.replace('-','')} ${hasDash ? 'ASC' : 'DESC'}`;
    }
    if (config.withRelation) {
      _query = {
        ..._query,
        include: [{ relation: config.withRelation }]
      }
    }
    if (
      config.search
      && config.search.value
      && config.search.fields
      && config.search.fields.length > 0
    ) {
      _query = {
        ..._query,
        where: config.search.fields.length > 1
          ? {
            'or': config.search.fields.map(field => ({
              [field]: {
                'ilike': `%25${config.search.value}%25`
              }
            }))
          }
          : {
            [config.search.fields[0]]: {
              'ilike': `%25${config.search.value}%25`
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
