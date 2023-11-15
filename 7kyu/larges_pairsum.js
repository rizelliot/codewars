// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.

// My solution:

function largestPairSum(numbers) {
  let bigSum1 = Math.max(...numbers);

  let numbersAlt = [...numbers];
  numbersAlt.splice(numbers.indexOf(bigSum1), 1);

  let bigSum2 = Math.max(...numbersAlt);

  return bigSum1 + bigSum2;
}
