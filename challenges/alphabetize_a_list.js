// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

// The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

// Example:

// function sortIt('bid, zag', 2) //=> 'zag, bid'

// The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of Strings instead.

// My solution:

function sortIt(list, n) {
  const wordArray = list.split(", ").map((word) => word.trim());

  wordArray.sort(function (a, b) {
    const nthLetterA = a.charAt(n - 1).toLowerCase();
    const nthLetterB = b.charAt(n - 1).toLowerCase();

    if (nthLetterA < nthLetterB) {
      return -1;
    } else if (nthLetterA > nthLetterB) {
      return 1;
    } else {
      return a.localeCompare(b, "en", { sensitivity: "base" });
    }
  });

  return wordArray.join(", ");
}
