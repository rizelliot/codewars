// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My solution: 

function fakeBin(x) {
    const oneFilter = /[0-4]/g;
    const zeroFilter = /[5-9]/g;
     
    return x.replace(oneFilter, '0').replace(zeroFilter, '1');
   }