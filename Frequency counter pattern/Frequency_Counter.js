// Write a function named same, which accepts 2 arrays. The function should return True if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// SAMPLE OUTPUT:
// same([1,2,3], [4,9,1]) // True
// same([1,2,4], [1,4]) // False
// same([1,2,1], [4,4,1]) // False (must be same frequency)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let countArr1 = {};
  let countArr2 = {};
  for (let element of arr1) {
    countArr1[element] = (countArr1[element] || 0) + 1;
  }
  for (let element of arr2) {
    countArr2[element] = (countArr2[element] || 0) + 1;
  }

  for (let key in countArr1) {
    if (!(key ** 2 in countArr2)) {
      return false;
    }
    if (countArr2[key ** 2] !== countArr1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
