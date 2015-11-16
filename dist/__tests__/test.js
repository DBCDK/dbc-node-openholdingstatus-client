'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _chai = require('chai');

// eslint-disable-line

var _clientJs = require('../client.js');

var OpenHoldingStatus = _interopRequireWildcard(_clientJs);

// eslint-disable-line

describe('Test OpenHoldingStatus getHolding', function () {

  it('Dummy', function (done) {

    done();

    /*
    this.timeout(5000);
    setTimeout(done, 5000);
    const config = {
      wsdl: 'http://openholdingstatus.addi.dk/2.2/?wsdl'
    };
     OpenHoldingStatus.init(config);
    let result = OpenHoldingStatus.getHolding({
      responderId: '710100',
      pid: '870970-basis:43512447'
    });
     result.then(function (holdingsResult) {
      assert.equal(holdingsResult['responder']['willLend'], 'true');
      done();
    });
    */
  });
});