// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.


// My solution:

function divCon(x) {
  let nonStringCount = 0;
  let stringCount = 0;
  x.forEach((n) => {
    if (typeof n === "string") {
      nonStringCount += +n;
    } else {
      stringCount += n;
    }
  });
  return stringCount - nonStringCount;
}