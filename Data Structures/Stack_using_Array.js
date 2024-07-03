const { numeric } = require("tar");

// Method 1
let stack = [];
stack.push("Google");
stack.push("Youtube");
stack.push("Gmail");
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

// Method 2 (Inefficent in case of large data because inserting/deleting from/in the begining requires reindexing of data)
let newStack = [];
newStack.unshift("Hi");
newStack.unshift("there");
newStack.unshift("!!");
console.log(newStack);
newStack.shift();
console.log(newStack);
newStack.shift();
console.log(newStack);
