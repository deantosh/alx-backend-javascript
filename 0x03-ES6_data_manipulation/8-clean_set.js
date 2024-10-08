// Create a function named cleanSet
//   - returns a string of all the set values that start with a specific
//     string (startString).

export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }
  const filteredResults = [...set].filter((item) => item.startsWith(startString));

  const newResults = filteredResults.map((item) => item.slice(startString.length));

  return newResults.join('-');
}
