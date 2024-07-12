// undirected graph
// both depthFirstTraversalRecursive and depthFirstTraversalIterative gives different result.
// both are correct, difference is that the node have different neighbours and we can do the traversal by going through any neighbouring node.
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

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstTraversalRecursive(start) {
    let visited = {}; // stores{A:true, b:ture..}
    let result = [];
    let adjacencyList = this.adjacencyList; // we can't access this.adjacencey list inside the function
    function dfs(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) return dfs(neighbour);
      });
    }
    dfs(start);
    return result;
  }
  depthFirstTraversalIterative(start) {
    let stack = [start];
    let result = [];
    let visited = [];
    let vertex;
    visited[start] = true;
    while (stack.length) {
      vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.depthFirstTraversalRecursive("A"));
console.log(g.depthFirstTraversalIterative("A"));

          //     A 
          //   /   \
          //  B      C
          //  |      |
          //  D------E
          //   \    /
          //     F