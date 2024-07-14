// remove the comments in case of doubt.

class NaivePriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
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
    let nodes = new NaivePriorityQueue();
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
console.log(wg.Dijkstras("A", "D"));
