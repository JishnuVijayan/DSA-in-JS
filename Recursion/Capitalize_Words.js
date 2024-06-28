function capitalizeWords(arr) {
  if (arr.length === 0) return [];

  const capitalizedWord = arr[0].toUpperCase();
  return [capitalizedWord].concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
