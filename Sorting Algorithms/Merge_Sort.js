// Divides the array in to half until it become single element array and it merges back after sorting.
// Divide and conquer
// Divide, conquer, merge.
// Time complexity is O(nlogn) (better than O(n^2))
// if array have 8 element then 3 splits (2^3), for 16 elements 4 splits (2^4), for 32 elements 5 splits (2^5) log n complexity.
// On each merging in splited arrays there is n comparison so TC = (nlogn)

function merge(arr1, arr2) {
  let result = [];
  let i = 0; // denoting the index of the first array
  let j = 0; // denoting the index of the second array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 20, 600, 10, 1, 3, 70]));
