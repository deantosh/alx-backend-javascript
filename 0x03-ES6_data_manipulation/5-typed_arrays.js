// Create a function named createInt8TypedArray
//   - returns a new ArrayBuffer with an Int8 value at a specific position.

export default function createInt8TypedArray(length, position, value) {
  // Create buffer
  const buffer = new ArrayBuffer(length);

  // Create a view for the created buffer
  const view = new DataView(buffer);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Add Int8 value to the position
  view.setInt8(position, value);

  return view;
}
