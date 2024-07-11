// Undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      console.log("One or both vertices do not exist.");
    }
  }
}

let g = new Graph();
g.addVertex("India");
g.addVertex("UK");
g.addVertex("South Africa");
console.log(g);
g.addEdge("India", "South Africa");
g.addEdge("India", "UK");
console.log(g);
