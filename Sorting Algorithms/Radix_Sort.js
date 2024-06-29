// Different type of sorting algorithm.
// Works for numbers.
// It first checks the last digit of all the numbers in the array and place them in buckets (0 - 9).
// Then it joins the numbers in order and then do the same according to 2nd last digit and it goes on
// So this sort basically work n number of passes where n is the number count of the largest number in the array.
// getDigit(num, i) accept a number and a i value as integer which returns the number(0 - 9) at the ith position of the number.
// for example getDigit(1234, 0) // 4, getDigit(1234, 1) // 3 like that.
// digitCount() calculates the log to the base 10 of the value which will be a decimal value so we floor it and add 1 to it so we get the correct count.
// mostDigits accepts an array as input and returns the mostDigit number count.
// let arrayBucket = Array.from({ length: 10 }, () => []); creates an array with 10 subarray.
// arr = [].concat(...arrayBucket); without spread operator it concates the subarrays.

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr) {
  let maxDigit = 0;
  for (let i = 0; i < arr.length; i++)
    maxDigit = Math.max(maxDigit, digitCount(arr[i]));
  return maxDigit;
}

function radixSort(arr) {
  let maxCount = mostDigits(arr);
  for (let k = 0; k < maxCount; k++) {
    let arrayBucket = Array.from({ length: 10 }, () => []);
    // console.log(arrayBucket);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      //console.log(digit);
      arrayBucket[digit].push(arr[i]);
    }
    arr = [].concat(...arrayBucket);
    //console.log(arrayBucket);
  }
  return arr;
}

console.log(radixSort([20, 300, 4000, 1234, 11, 90128, 1000000]));
