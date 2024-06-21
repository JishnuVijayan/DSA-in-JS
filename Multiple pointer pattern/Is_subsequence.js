// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(subStr, string) {
  let i = 0;
  let j = 0;
  while (j < string.length) {
    if (subStr[i] == string[j]) {
      i++;
    }
    j++;
  }
  if (i === subStr.length) return true;
  else return false;
}

console.log(isSubsequence("sing", "sting"));
