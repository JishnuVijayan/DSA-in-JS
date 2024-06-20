function validAnagrams(str1, str2) {
  let char1_count = {};
  let char2_count = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let char of str1) {
    char1_count[char] = (char1_count[char] || 0) + 1;
  }
  for (let char of str2) {
    char2_count[char] = (char2_count[char] || 0) + 1;
  }
  for (let key in char1_count) {
    if (!(key in char2_count)) {
      return false;
    }
    if (char1_count[key] !== char2_count[key]) {
      return false;
    }
  }
  return true;
}

if (validAnagrams("car", "rac")) {
  console.log("These strings are Anagrams");
} else {
  console.log("These strings are not Anagrams");
}
