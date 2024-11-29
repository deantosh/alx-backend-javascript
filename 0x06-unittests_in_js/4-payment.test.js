// test using sinon
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with "SUM" and the correct arguments', function() {
    // Stub Utils.calculateNumber method
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    // Stubbed response
    calculateNumberStub.returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function with specific parameters
    sendPaymentRequestToApi(100, 20);

    // Verify stub was called with the correct arguments
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));

    // Verify spy was used with correct arguments
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));

    // Restore original method after use
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
