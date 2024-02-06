// My solution:

function minSum(arr) {
  const arrayBig = arr
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, arr.length / 2);
  const arraySmall = arr
    .sort((a, b) => a - b)
    .reverse()
    .slice(arr.length / 2, arr.length)
    .reverse();

  let minSum = 0;

  arrayBig.forEach((number, index) => {
    minSum += number * arraySmall[index];
  });

  return minSum;
}
