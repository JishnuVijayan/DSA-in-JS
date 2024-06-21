//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let start = 0;
  let end = 0;
  let maxLen = 0;
  let seen = {};
  while (end < str.length) {
    let char = str[end];
    // if char is alredy in the set and if start pointer is less than or equal to that index value of that character then start points to next character(moves to right since there is a duplicate element.)
    if (seen[char] !== undefined && seen[char] >= start) start = seen[char] + 1;
    // update the value of that character (if it is not defined then index is stored, if it is already in the set then updates the value)
    seen[char] = end;
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
    console.log(seen);
  }
  console.log(seen);
  return maxLen;
}

console.log(findLongestSubstring("rithmschool"));
