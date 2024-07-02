class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(this.length === 0) return undefined;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = removedNode.prev;
      newTail.next = null;
      this.tail = newTail;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }
  shift() {
    if(this.length === 0) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
}

let list = new DoublyLinkedList();
console.log(list.push(1));
console.log(list.push(3));
console.log(list.push(5));
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());

