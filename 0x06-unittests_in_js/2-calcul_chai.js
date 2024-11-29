// Function that adds, subtracts and divides 2 numbers based on the type operation.

export default function calculateNumber(type, a, b) {
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
