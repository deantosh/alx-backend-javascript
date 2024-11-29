// test using sinon
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with "SUM" and the correct arguments', function() {
    // Spy Utils.calculateNumber method
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call sendPaymentRequestToApi function
    sendPaymentRequestToApi(100, 20);

    // Verify spy was used with correct arguments
    assert(spy.calledOnceWith('SUM', 100, 20), 'calculateNumber was not called with the correct arguments');

    // Restore original method after use
    spy.restore();
  });
});
