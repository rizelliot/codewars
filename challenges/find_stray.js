// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3



// My solution:

function stray(numbers) {
    let firstNumber = numbers[0];
    let accumulator = 0;
  
    numbers.forEach(number => {
      if (firstNumber === number) {
        accumulator++;
      }
    });
  
    if (accumulator > 1) {
      return numbers.filter(number => number !== firstNumber)[0];
    } else {
      return firstNumber;
    }
  }