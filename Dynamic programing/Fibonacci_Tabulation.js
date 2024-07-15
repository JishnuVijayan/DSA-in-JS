function fibonnaciTabulation(n) {
  if (n <= 1) return 1;
  let fib = [0, 1];
  for (i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

console.log(fibonnaciTabulation(30));

// Time complexity is same but this method won't cause stack overflow.
