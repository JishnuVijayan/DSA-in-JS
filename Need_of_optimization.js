// SAME PROGRAM BUT 2 DIFFERENT APPROACHES

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(10000000);
var t2 = performance.now();
console.log(`Total time taken for first approach: ${(t2 - t1) / 1000} seconds`);

function addUpToNew(n) {
  return (n * (n + 1)) / 2;
}

var t3 = performance.now();
addUpToNew(10000000);
var t4 = performance.now();
console.log(`Total time taken for second approach: ${(t4 - t3) / 1000}`);
