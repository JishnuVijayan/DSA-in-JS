// Write a function called averagePair. Given a SORTED array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, avg) {
  if (arr.length === 0) return false;
  if (arr.length === 1) {
    if (avg === arr[0]) return true;
    else return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let calculatedAvg = (arr[left] + arr[right]) / 2;
    if (calculatedAvg == avg) return true;
    else if (calculatedAvg > avg) right--;
    else left++;
  }
  return false;
}

console.log(averagePair([], 4));
