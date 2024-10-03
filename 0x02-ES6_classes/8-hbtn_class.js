export default class HolbertonClass {
  constructor(size, location) {
    this._size = HolbertonClass._validateNumber(size, 'size');
    this._location = HolbertonClass._validateString(location, 'location');
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }

  // Validate functions
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a Number`);
    }
    return value;
  }
}
