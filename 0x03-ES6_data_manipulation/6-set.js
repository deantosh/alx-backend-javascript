// Create a function named setFromArray that returns a Set from an array.

export default function setFromArray(arr) {
    const arrSet = new Set();

  for (const val of arr) {
    if (!arrSet.has(val)) {
      arrSet.add(val);
    }
  }

  return arrSet;
}
