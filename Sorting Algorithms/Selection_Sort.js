// Similar to Bubble sort algorithm.
// But instead of fixing the last elements in each pass, Selection sort finds the minimum element index and swap it with the predicted minimum(In most cases it is the first element of the array.)

function selectionSort(arr) {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    if (minIndex !== i) swap(arr, i, minIndex);
  }
  return arr;
}

console.log(selectionSort([3, 4, 7, 1, 9, 10, -1]));
