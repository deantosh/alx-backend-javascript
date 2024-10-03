import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing._validateNumber(amount, 'amount');
    this._currency = Pricing._validateCurrency(currency, 'currency');
  }

  // Attributes getter methods
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Attributes setter methods
  set amount(value) {
    this._amount = Pricing._validateNumber(value, 'amount');
  }

  set currency(value) {
    this._currency = Pricing._validateCurrency(value, 'currency');
  }

  // Method -- return the attributes in the following format amount currency_name (currency_code).
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Method -- convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Validate function
  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  static _validateCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attributeName} must be a currency`);
    }
    return value;
  }
}
