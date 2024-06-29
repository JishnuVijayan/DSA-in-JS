// We choose a pivot as an element in the array and we move the numbers that are smaller than the pivot to the left and the numbers that are larger to the right side.
// So the position of the pivot element is fixed.
// After this same procedure is done on the left and right side of the pivot by choosing another pivot element.
// On the 28th and the 30th line I used pivotIndex - 1, and pivotIndex + 1 because pivot is already in the right position.
// Worst case is when all the elements in the array is greater than or left than of the pivot. so TC will be n^2.

function pivot(arr, start, end) {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  };

  let pivotElement = arr[start];
  let currentPivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotElement) {
      currentPivotIndex++;
      swap(arr, i, currentPivotIndex);
    }
  }

  swap(arr, start, currentPivotIndex);
  return currentPivotIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    // LEFT SIDE OF THE PIVOT
    quickSort(arr, 0, pivotIndex - 1);
    // RIGHT SIDE OF THE PIVOT
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

let arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];
console.log(quickSort(arr));
