import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = SkyHighBuilding._validateNumber(floors, 'floors');
  }

  // Getter method
  get floors() {
    return this._floors;
  }

  // Abstract method that must be implemented by subclasses
  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
  /* eslint-enable class-methods-use-this */

  // Validation for the sqft attribute to ensure it's a number
  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }
}
