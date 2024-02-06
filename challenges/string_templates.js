// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// My solution:

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

let dupa = (num1, num2) => {
  return num1 + num2
}

dupa(16, 26)