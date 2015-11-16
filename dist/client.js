'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getHolding = getHolding;
exports.init = init;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dbcNodeBasesoapClient = require('dbc-node-basesoap-client');

var BaseSoapClient = _interopRequireWildcard(_dbcNodeBasesoapClient);

var wsdl = null;
var defaults = {};

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */

function sendHoldingsRequest(params) {
  var holdings = BaseSoapClient.client(wsdl, defaults, '');
  return holdings.request('holdings', params, null, true);
}

/**
 * Constructs the object of parameters for OpenHoldingStatus holdings request.
 *
 * @param {Object} values Object with the necessary parameters
 * @return {Promise}
 */

function getHolding(values) {
  var params = {
    lookupRecord: {
      responderId: values.responderId,
      pid: values.pid
    }
  };
  return sendHoldingsRequest(params);
}

function init() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

  if (!config || !config.wsdl) {
    throw new Error('Expected config object but got null or no wsdl provided');
  }
  wsdl = config.wsdl;
}

var METHODS = {
  getHolding: getHolding
};
exports.METHODS = METHODS;