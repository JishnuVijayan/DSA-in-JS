class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }
  // Method to add a new node to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Method to remove and return the last node of the list
  pop() {
    if (this.length === 0) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  // Method to remove and return the first node of the list
  shift() {
    if (this.length === 0) return undefined;
    let previousHead = this.head;
    this.head = previousHead.next;
    previousHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return previousHead;
  }
  // Method to add a new node at the beginning of the list
  unshift(val) {
    let newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  // retrieve a node by it's position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) currentNode = currentNode.next;
    return currentNode;
  }
  // changing the value of a node by accessing it with it's position.
  // set(index, value) {
  //   if (index < 0 || index >= this.length) return null;
  //   let currentNode = this.head;
  //   for (let i = 0; i < index; i++) currentNode = currentNode.next;
  //   currentNode.value = value;
  //   return currentNode;
  // }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return foundNode;
    }
    return false;
  }
}

let list = new SinglyLinkedList();
console.log(list.push("Hi"));

console.log(list.push("Jishnu"));

console.log(list.push("How are you"));

// list.shift();
// console.log(list);

// list.shift();
// console.log(list);

// console.log(list.unshift(1));

console.log(list.get(1));

console.log(list.set(1, "Kumar"));

console.log(list.get(1));