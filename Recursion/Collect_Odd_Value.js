// HELPER METHOD RECURSIONS (MAINLY USED WHILE THERE IS ARRAY IN RECURSION).

function collectOddValues(arr) {
  let result = [];
  function oddNumbers(arr) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    oddNumbers(arr.slice(1));
  }
  oddNumbers(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
