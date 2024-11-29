// utils.js
const Utils = {
  calculateNumber: function(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    else if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    else if (type === 'DIVIDE') {
      b = Math.round(b);
      if (b === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    }
    else {
      return 'Error';
    }
  }
};

// Export the Utils module
module.exports = Utils;
