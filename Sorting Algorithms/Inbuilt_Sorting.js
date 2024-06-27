function numberSort(num1, num2) {
  return num1 - num2; // if num2 - num1 it will be in decending order
}

console.log([6, 4, 15, 10].sort(numberSort));

// if sort() have:
// 1) Negative value - second number is placed first
// 2) Positive value - first number is placed first
// 3) 0 - goes as maximum as possible
// sort() for strings sort alphabetically.
// for sorting according to length of the strings use same function but return str1.length - str2.length
