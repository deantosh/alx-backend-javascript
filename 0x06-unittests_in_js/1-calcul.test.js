const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function tests', function () {
  it('should add two numbers correctly when type is SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
  });

  it('should subtract two numbers correctly when type is SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2.3), 4);
  });

  it('should divide two numbers correctly when type is DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 7.4, 2.2), 3.5);
  });

  it('should return "Error" when dividing by zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 7.4, 0), 'Error');
  });

  it('should return "Error" for an unknown type', function () {
    assert.strictEqual(calculateNumber('MULTIPLY', 7.4, 2), 'Error');
  });
});
