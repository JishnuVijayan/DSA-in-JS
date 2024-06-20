// Implement a function called countUniqueValues() which accepts a SORTED array, and counts the unique values in the array. There can be negative numbers in the array, but it always be sorted.

// countUniqueValues([1, 1, 1, 1, 2]) // 2
// countUniqueValues([]) // 0
// countUniqueValues([-1,0,1,2,3,3]) // 5

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  } else {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
}

console.log(countUniqueValues([-1, 0, 1, 2, 3, 3]));
