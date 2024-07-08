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
  find(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }
  BFS() {
    let queue = [], //instead of making a queue from scratch, we use array for simplicity of code.
      visited = []; // we return this at last.
    queue.push(this.root);
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      visited.push(node.value);
    }
    return visited;
  }
  DFSPreorder() {
    let visited = [];
    let current = this.root;
    function visit(node) {
      visited.push(node.value);
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
    }
    visit(current);
    return visited;
  }
  DFSPostorder() {
    let visited = [];
    let current = this.root;
    function visit(node) {
      if (node.left) visit(node.left);
      if (node.right) visit(node.right);
      visited.push(node.value);
    }
    visit(current);
    return visited;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
//tree.insert(70);
//console.log(tree.find(16));

console.log(tree.DFSPostorder());
