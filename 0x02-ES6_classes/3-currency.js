export default class Currency {
  constructor(code, name) {
    this._code = Currency._validateString(code, 'code');
    this._name = Currency._validateString(name, 'name');
  }

  // Attributes getter methods
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Attributes setter methods
  set code(value) {
    this._code = Currency._validateString(value, 'code');
  }

  set name(value) {
    this._name = Currency._validateString(value, 'name');
  }

  // Method -- return the attributes in the following format name (code).
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validate function
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }
}
