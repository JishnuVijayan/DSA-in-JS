// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  let reversedStr = "";
  if (str === "") return reversedStr;
  let lastChar = str[str.length - 1];
  return lastChar + reverse(str.slice(0, -1));
}

console.log(reverse("awesome"));
