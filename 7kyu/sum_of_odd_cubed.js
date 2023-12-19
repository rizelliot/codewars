// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


// My solution:


function cubeOdd(arr) {

    if (arr.some(element => Number.isInteger(element) === false)) {
      return undefined;
    } else {
      
    const onlyOddNumbers = Array.from(arr).filter(number => number % 2 != 0).map(number => number **3)
    const result = onlyOddNumbers.reduce((sum, curr, index) => {
      return sum + curr 
    }, 0)
      console.log(result, onlyOddNumbers, arr)
      return result
      
    }
      
    
      