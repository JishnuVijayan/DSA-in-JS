// Write a function called sumZero() which accepts a SORTED array of integers. The function should find the first pair where the sum is 0. Return the array that includes bothh values that sum to zero or false if a pair does not exist.

// sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]
// sumZero([-1,0,-2]) // false

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
