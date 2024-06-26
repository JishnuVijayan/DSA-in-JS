// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  let arrayOfObjectStrings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arrayOfObjectStrings.push(obj[key]);
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    )
      arrayOfObjectStrings = arrayOfObjectStrings.concat(
        collectStrings(obj[key])
      );
  }
  return arrayOfObjectStrings;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
