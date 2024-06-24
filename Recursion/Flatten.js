// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArray = newArray.concat(flatten(arr[i]));
    } else newArray.push(arr[i]);
  }
  return newArray;
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

// Array.isArray() returns true if it is an array.
