// Lower priority value have higher priority so MIN BINARY HEAP is used.
// If the priorites are similar no particular order, so for that we can add insertion time or something like that.

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleup();
  }
  bubbleup() {
    if (this.values.length === 1) return this;
    let newNodeIndex = this.values.length - 1;
    let element = this.values[newNodeIndex];
    while (newNodeIndex > 0) {
      let parentIndex = Math.floor((newNodeIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[newNodeIndex] = parent;
      newNodeIndex = parentIndex;
    }
  }
  dequeue() {
    let length = this.values.length;
    if (length === 0) return null;
    if (length === 1) return this.values.pop();
    let end = this.values.pop();
    let min = this.values[0];
    this.values[0] = end;
    this.bubbleDown();
    return min;
  }
  bubbleDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;
      let leftChild, rightChild;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIndex;
      }
      if (swap == null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("Gunshot wound", 1);
ER.enqueue("High fever", 4);
ER.enqueue("Broken arm", 2);
ER.enqueue("Wound in leg", 3);
console.log(ER);
ER.dequeue();
console.log(ER);
ER.dequeue();
console.log(ER);
