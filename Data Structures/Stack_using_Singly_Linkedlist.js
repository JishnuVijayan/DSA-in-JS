class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode; // points to the last element inserted(Top of the stack)
      this.last = newNode; // points to the first element inserted
    } else {
      let prevFirst = this.first;
      this.first = newNode;
      newNode.next = prevFirst;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) return null;
    let removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.value;
  }
}

let stack = new Stack();
console.log(stack.push("Hello"));
console.log(stack);
console.log(stack.push(","));
console.log(stack);
console.log(stack.push("how are you"));
console.log(stack);
console.log(stack.push("?"));
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
