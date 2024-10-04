export default class Building {
  constructor(sqft) {
    this._sqft = Building._validateNumber(sqft, 'sqft');

    // Check if the subclass has overridden evacuationWarningMessage
    if (this.constructor !== Building
          && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter method
  get sqft() {
    return this._sqft;
  }

  /* eslint-disable class-methods-use-this */
  // Abstract method that must be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // Validation for the sqft attribute to ensure it's a number
  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }
  /* eslint-enable class-methods-use-this */
}
