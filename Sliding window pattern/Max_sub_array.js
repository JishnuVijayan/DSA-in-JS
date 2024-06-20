// Write a function named maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in an array.

// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
// maxSubArraySum([4, 2, 1, 6], 1) // 6
// maxSubArraySum([4, 2, 1, 6, 2], 4) // 13
// maxSubArraySum([], 4) // null

function maxSubArraySum(arr, n) {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([], 4));
