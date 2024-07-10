// Introducing prime numbers will reduce chance of collision.
// There is a higher chance of reduced collosion if the length of the table is a prime number(arrLen).
function optimizedHashFunction(key, arrLen) {
  let total = 0;
  WEIRD_PRIME = 31;
  for (i = 0; i < Math.min(arrLen, 100); i++) {
    let char = key[i];
    total = total + WEIRD_PRIME + char.charCodeAt(0);
  }
  return total % arrLen;
}
