// Create a function named hasValuesFromArray
//   - returns a boolean if all the elements in the array exist within the set.

export default function hasValuesFromArray(elementSet, arr) {
  return arr.every((element) => elementSet.has(element));
}
