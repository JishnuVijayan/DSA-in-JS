function memoizedFibonacci(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let fib = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  memo[n] = fib;
  return fib;
}

console.log(memoizedFibonacci(30));
// Time complexity is changed from O(2^n) to O(n)(roughly).
