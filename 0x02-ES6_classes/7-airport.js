export default class Airport {
  constructor(name, code) {
    this._name = Airport._validateString(name, 'name');
    this._code = Airport._validateString(code, 'code');
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  // Validate functions
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
}
