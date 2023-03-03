// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

//     If the value is a multiple of 3: use the value "Fizz" instead
//     If the value is a multiple of 5: use the value "Buzz" instead
//     If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]



// My solution


function fizzbuzz(n) {
  const range = (start, n, step) =>
    Array.from({ length: (n - start) / step + 1 }, (_, i) => start + i * step);
  let fizzbuzzArray = range(1, n, 1);

  fizzbuzzArray.forEach((number, index) => {
    if (fizzbuzzArray[index] % 5 === 0 && fizzbuzzArray[index] % 3 === 0) {
      fizzbuzzArray[index] = "FizzBuzz";
    } else if (fizzbuzzArray[index] % 5 === 0) {
      fizzbuzzArray[index] = "Buzz";
    } else if (fizzbuzzArray[index] % 3 === 0) {
      fizzbuzzArray[index] = "Fizz";
    }
  });

  return fizzbuzzArray;
}
