// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// My solution:

function dontGiveMeFive(start, end) {
    // create an array from given start to given end
    const newArray = [];
    
    for (i = start; i <= end; i++) {
      newArray.push(i)
    }
    
    // stringify all the numbers, check if it includes 5, then filter out all true values
    const filtered = newArray.map(number => number.toString().includes('5')).filter(element => !element)
    
    // return the number of items inside the filtered array
    return filtered.length
  }