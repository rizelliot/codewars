// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).


// My solution:

function insertDash(num) {
    const array = num.toString().split('');
  
    const resultArray = array.map((number, index) => {
      if (index < array.length - 1 && number % 2 !== 0 && array[index + 1] % 2 !== 0) {
        return [number, '-'];
      }
      return [number];
    });
  
    const result = [].concat(...resultArray).join('');
    
    return result;
  }