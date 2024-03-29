// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


// My solution:

function largest(n, array) {
  array.sort((a, b) => b - a);
  if (array[0] < 0) {
    return array.slice(array.length - n, array.length);
  }
  return array.slice(0, n).reverse();
}
