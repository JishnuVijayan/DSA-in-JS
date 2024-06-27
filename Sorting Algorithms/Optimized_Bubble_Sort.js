// Since bubble sort is not performing well in case of almost sorted array. There is a method used to optimize the bubble sort's performance.
// If there is no swapping made in the previous loop then there is no chance of making a swap in the next loop.
// So if a j for loop complete without swap then we break
// With this approach the no of pass is reduced and performance is inreased

function swapNumber(arr, j, k) {
  [arr[j], arr[k]] = [arr[k], arr[j]];
}

function optimizedBubbleSort(arr) {
  let noSwap = true;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapNumber(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(optimizedBubbleSort([1, 4, 5, 3, 6, 7]));
