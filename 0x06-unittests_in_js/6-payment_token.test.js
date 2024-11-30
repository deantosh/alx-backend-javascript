// Test 6-payment_token module
const chai = require('chai');
const { expect } = chai;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', done => {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
	done();
      })
      .catch(err => done(err));
  });

  it('should do nothing (return undefined) when success is false', done => {
    const response = getPaymentTokenFromAPI(false);
      expect(response).to.equal(undefined); // Assert undefined
    done();
  });
});
