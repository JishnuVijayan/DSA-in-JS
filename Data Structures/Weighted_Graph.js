// class NaivePriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(value, priority) {
//     this.values.push({ value, priority });
//     this.sort();
//   }
//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }
  Dijkstras(start, end) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let currentSmallest;
    let path = [];
    // Initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[start] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // console.log(distances);
    // console.log(nodes);
    // console.log(nodes.values.length);
    //we are looping until our queue is empty
    // As long as there is something to visit
    while (nodes.values.length) {
      currentSmallest = nodes.dequeue().value;
      if (currentSmallest === end) {
        // We are done, build up the path to return at end
        while (previous[currentSmallest]) {
          path.push(currentSmallest);
          currentSmallest = previous[currentSmallest];
        }
        path.push(start); // Add start to path
        break;
      }

      if (currentSmallest || distances[currentSmallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[currentSmallest]) {
          let candidate = distances[currentSmallest] + neighbor.weight;
          let nextNeighbor = neighbor.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = currentSmallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.reverse();
  }
}

let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
console.log(wg.Dijkstras("A", "E"));
