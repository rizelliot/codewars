

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// My solution:

function getEvenNumbers(numbersArray){
    function returnEven(number) {
      if (number % 2 === 0) {
        return number;
      }
    } 
 return numbersArray.filter(returnEven)
   
}