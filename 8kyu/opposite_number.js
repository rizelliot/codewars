// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// My solution:

function opposite(number) {
  if (Math.sign(number) > 0) {
    return -Math.abs(number);
  }
  return Math.abs(number);
}
