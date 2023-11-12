// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


// My solution:

function countSheeps(sheep) {
  let numberOfSheep = sheep.reduce((sum, current) => {
    if (current != false && current != undefined && current != null) {
      sum = sum + 1;
    }
    return sum;
  }, 0);

  return numberOfSheep;
}
