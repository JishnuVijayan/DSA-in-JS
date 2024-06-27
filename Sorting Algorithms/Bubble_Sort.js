// Bubble sort compares 2 adjacent elements and swap them if the first number is greater than second.
// At the end of each pass one element from in the end is fixed which is denoted in the limit of j for loop.
// At first pass last element is fixed, in the second pass the second last element is fixed... like this it goes on.

function swapNumber(arr, j, k) {
  [arr[j], arr[k]] = [arr[k], arr[j]];
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) swapNumber(arr, j, j + 1);
    }
  }
  return arr;
}

console.log(bubbleSort([4, 5, 6, 7, 1, 2, 3]));
