// Method 1
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue);
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

// Method 2

let newQueue = [];
newQueue.unshift("A");
newQueue.unshift("B");
newQueue.unshift("C");
newQueue.unshift("D");
console.log(newQueue);
console.log(newQueue.pop());
console.log(newQueue.pop());
console.log(newQueue.pop());
console.log(newQueue.pop());
console.log(newQueue.pop());
