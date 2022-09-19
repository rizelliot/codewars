// My solution:

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    arr1.concat(arr2).forEach((n, i) => {
    sum += n
   })  
    return sum;
 }