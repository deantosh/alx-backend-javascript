// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test cases for the calculateNumber function
describe('calculateNumber', function() {
  it('should round 1.4 and 1.5 and return 3', function() {
    assert.strictEqual(calculateNumber(1.4, 1.5), 3);
  });

  it('should round -1.4 and -1.5 and return -2', function() {
    assert.strictEqual(calculateNumber(-1.4, -1.5), -2);
  });

  it('should round 0.1 and 0.9 and return 1', function() {
    assert.strictEqual(calculateNumber(0.1, 0.9), 1);
  });

  it('should round -0.1 and -0.9 and return -1', function() {
    assert.strictEqual(calculateNumber(-0.1, -0.9), -1);
  });

  it('should round 1.5 and -1.5 and return 1', function() {
    assert.strictEqual(calculateNumber(1.5, -1.5), 1);
  });

  it('should round 2.7 and -2.4 and return 1', function() {
    assert.strictEqual(calculateNumber(2.7, -2.4), 1);
  });

  it('should round 3.2 and 0.7 and return 4', function() {
    assert.strictEqual(calculateNumber(3.2, 0.7), 4);
  });
});
