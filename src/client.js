'use strict';

import * as BaseSoapClient from 'dbc-node-basesoap-client';

let wsdl = null;
let defaults = {};

/**
 * Retrieves data from the webservice based on the parameters given
 *
 * @param {Object} params Parameters for the request
 * @return {Promise}
 */

function sendHoldingsRequest(params) {
  let holdings = BaseSoapClient.client(wsdl, defaults, '');
  return holdings.request('holdings', params, null, true);
}

/**
 * Constructs the object of parameters for OpenHoldingStatus holdings request.
 *
 * @param {Object} values Object with the necessary parameters
 * @return {Promise}
 */
export function getHolding(values) {
  const params = {
    lookupRecord: {
      responderId: values.responderId,
      pid: values.pid
    }
  };
  return sendHoldingsRequest(params);
}

export function init(config = null) {
  if (!config || !config.wsdl) {
    throw new Error('Expected config object but got null or no wsdl provided');
  }
  wsdl = config.wsdl;
}

export const METHODS = {
  getHolding: getHolding
};
