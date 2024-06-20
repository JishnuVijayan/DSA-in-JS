// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  let frequencyCount1 = {};
  let frequencyCount2 = {};
  for (let number of strNum1) {
    frequencyCount1[number] = (frequencyCount1[number] || 0) + 1;
  }
  for (let number of strNum2) {
    frequencyCount2[number] = (frequencyCount2[number] || 0) + 1;
  }
  for (let number in frequencyCount1) {
    if (!(number in frequencyCount2)) {
      return false;
    }
    if (frequencyCount1[number] !== frequencyCount2[number]) return false;
  }
  return true;
}

console.log(sameFrequency(34, 14));
