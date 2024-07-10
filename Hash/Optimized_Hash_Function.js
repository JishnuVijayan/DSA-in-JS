// Introducing prime numbers will reduce chance of collision.
// There is a higher chance of reduced collosion if the length of the table is a prime number(arrLen).

function optimizedHashFunction(key, arrLen) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * WEIRD_PRIME + value) % arrLen;
    }
    return total;
  }
