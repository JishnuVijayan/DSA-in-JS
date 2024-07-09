// In insert function we insert in to the end of the array(left side of the tree), and finds it suitable position by comparing it with parent.
// since it is a MAXBINARYHEAP parent value should be greater than the children.
// In the array children of nth index is located at 2n+1 (Left Child) and 2n+2 (Right Child).
// Like this, for any child node at n, parent will be floor((n - 1) / 2)
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    let newNodeIndex = this.values.length - 1;
    while (newNodeIndex > 0) {
      let parentIndex = Math.floor((newNodeIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[newNodeIndex] = parent;
      newNodeIndex = parentIndex;
    }
    return this;
  }
}
const heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
console.log(heap.values);
