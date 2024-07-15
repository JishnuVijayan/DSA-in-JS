function fibonnaci(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  return fibonnaci(num - 1) + fibonnaci(num - 2);
}

console.log(fibonnaci(30));

// This method is HIGHLY INEFFICIENT because it's Time complexity is O(2^n)
