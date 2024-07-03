class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Adds at end.
  enqueue(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }
  // Removes at beginning
  dequeue() {
    if (this.size === 0) return null;
    let removedNode = this.first;
    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.value;
  }
}

let queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
