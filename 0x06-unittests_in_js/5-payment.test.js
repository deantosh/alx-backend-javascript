// test using sinon
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {

  let consoleLogSpy;

  // Set consoleLogSpy before each test
  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // Restore original method
  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM" and the correct arguments', function() {
    // Stub Utils.calculateNumber method
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    // Stubbed response
    calculateNumberStub.returns(10);

    // Call the function with specific parameters
    sendPaymentRequestToApi(100, 20);

    // Verify stub was called with the correct arguments
    assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));

    // Verify spy was used with correct arguments
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 10'));

    // Restore original method after use
    calculateNumberStub.restore();
  });

  it('Should verify console log is called once and has a total of 120', function() {
    // Compute for the total
    sendPaymentRequestToApi(100, 20);

    // Verify spy was called once and the output is correct in console
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('Should verify console log is called once and has a total of 20', function() {
    // Compute for the total
    sendPaymentRequestToApi(10, 10);

    // Verify spy was called once and the output is correct in console
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
