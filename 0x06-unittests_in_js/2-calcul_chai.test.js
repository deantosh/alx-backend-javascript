const chai = require('chai');
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function tests', function () {
  it('should add two numbers correctly when type is SUM', function () {
    const result = calculateNumber('SUM', 1.4, 2.5);
    expect(result).to.equal(4);
  });

  it('should subtract two numbers correctly when type is SUBTRACT', function () {
    const result = calculateNumber('SUBTRACT', 5.7, 2.3);
    expect(result).to.equal(4);
  });

  it('should divide two numbers correctly when type is DIVIDE', function () {
    const result = calculateNumber('DIVIDE', 7.4, 2.2);
    expect(result).to.equal(3.5);
  });

  it('should return "Error" when dividing by zero', function () {
    const result = calculateNumber('DIVIDE', 7.4, 0);
    expect(result).to.equal('Error');
  });

  it('should return "Error" for an unknown type', function () {
    const result = calculateNumber('MULTIPLY', 7.4, 2);
    expect(result).to.equal('Error');
  });
});
