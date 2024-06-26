// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1

function binarySearch(sortedArray, key) {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === key) return mid;
    else if (sortedArray[mid] > key) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
// left = 0, right = 4 mid = 2(3)  3 > 5 // left = 2 right = 4 mid = 3(4) 4 > 5 left = 4 right = 4 mid = 4
