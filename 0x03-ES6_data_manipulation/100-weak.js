// weak link data structure
// Tracks the number of times the function is called

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Return: current count
  const count = weakMap.get(endpoint) || 0;

  // set the count after each call
  weakMap.set(endpoint, count + 1);

  // check if query >= 5
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
