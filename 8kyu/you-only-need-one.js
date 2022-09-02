// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//My Solution:

function check(a, x) {
    let checkResult = false;
    a.forEach((val) => {if (x == val) {
       checkResult = true;
    }}) 
  return checkResult
}

// I later learned that all this code can be replaced by the includes() method lol