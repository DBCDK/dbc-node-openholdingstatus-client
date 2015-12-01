'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = OpenHoldingstatus;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dbcNodeBasesoapClient = require('dbc-node-basesoap-client');

var BaseSoapClient = _interopRequireWildcard(_dbcNodeBasesoapClient);

/**
 * Constructs the object of parameters for OpenHoldingStatus holdings request.
 *
 * @param {Object} values Object with the necessary parameters
 * @return {Promise}
 */
function getHolding(client, values) {
  var params = {
    lookupRecord: {
      responderId: values.responderId,
      pid: values.pid
    }
  };
  return client.request('holdings', params, null, true);
}

function OpenHoldingstatus() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

  if (!config || !config.wsdl) {
    throw new Error('Expected config object but got null or no wsdl provided');
  }
  var holdingsClient = BaseSoapClient.client(config.wsdl, {}, '');

  return {
    getHolding: getHolding.bind(null, holdingsClient)
  };
}

module.exports = exports['default'];