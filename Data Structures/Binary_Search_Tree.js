class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    let condition = true;
    while (condition) {
      if (currentNode.value > newNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          condition = false;
        } else currentNode = currentNode.left;
      } else if (currentNode.value < newNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          condition = false;
        } else currentNode = currentNode.right;
      } else return false;
    }
    return this;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(7);
tree.insert(11);
console.log(tree.insert(16));
