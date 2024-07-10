// Problem with this apporach
// Not constant time - Linear time (Depends on the length of the string)
// could be little more random

function hashFunction(key, arrLen) {
  let total = 0;
  for (let char of key) total += char.charCodeAt(0) - 96;
  return total % arrLen;
}
console.log(hashFunction("pink", 10));
console.log(hashFunction("cyan", 10));
