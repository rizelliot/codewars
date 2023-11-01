// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution:

function XO(str) {
  let xNumber = 0;
  let oNumber = 0;

  str.split("").forEach((letter) => {
    if (letter.toLowerCase() === "x") {
      xNumber++;
    } else if (letter.toLowerCase() === "o") {
      oNumber++;
    }
  });

  if (xNumber === oNumber) {
    return true;
  } else if (xNumber === 0 && oNumber === 0) {
    return true;
  }
  return false;
}