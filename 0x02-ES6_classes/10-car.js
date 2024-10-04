// Define unique symbols for each attribute
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = Car._validateString(brand, 'brand');
    this._motor = Car._validateString(motor, 'motor');
    this._color = Car._validateString(color, 'color');
  }

  // Method to clone the Car object
  cloneCar() {
      const clone = new this.constructor('', '', '');
    clone._brand = undefined;
    clone._motor = undefined;
    clone._color = undefined;
    return clone;
  }

  // Validate functions
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
}
