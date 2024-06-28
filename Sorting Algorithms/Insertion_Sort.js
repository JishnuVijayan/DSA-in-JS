// Similarities with bubble and selection sort.
// It starts from the 2 second element and compares it with the elements before it and insert that element in the appropriate place.
// That's why it is called Insertion sort.
// Can be also used when we don't have the complete array at once.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      // Added an extra condition in the for loop to make
      console.log(i, j);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([9, 2, 1, 6, 7, 43, 11, 3]));
