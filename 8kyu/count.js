// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My solution:

function countPositivesSumNegatives(input) {
    let positiveSum = 0;
    let negativeSum = 0;
    const finalArray = [];
      
    if (input == null || input == undefined) {
      return finalArray
    } else {
        input.forEach((x, y) => {
        if (x > 0) {
          positiveSum += 1;
    } else if (x < 0){
          negativeSum += x;
    }
      })
       }
      
      
      
     if (negativeSum < 0 || positiveSum > 0) {
         finalArray.unshift(positiveSum);
         finalArray.push(negativeSum);
    } 
      return finalArray;
    }