export default class HolbertonCourse {
  // validate parameters
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateString(name, 'name');
    this._length = HolbertonCourse._validateNumber(length, 'length');
    this._students = HolbertonCourse._validateStudentsArray(students, 'students');
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(value) {
    this._name = HolbertonCourse._validateString(value, 'name');
  }

  set length(value) {
    this._length = HolbertonCourse._validateNumber(value, 'length');
  }

  set students(value) {
    this._students = HolbertonCourse._validateStudentsArray(value);
  }

  // Private validation methods
  static _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  static _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  static _validateStudentsArray(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    return value;
  }
}
