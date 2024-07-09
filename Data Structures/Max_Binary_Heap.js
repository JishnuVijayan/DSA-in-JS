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
    this.bubbleUp();
  }
  bubbleUp(){
    let newNodeIndex = this.values.length - 1;
    let element = this.values[newNodeIndex];
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
  extractMax() {
    let length = this.values.length;
    if (length === 0) return null;
    if (length === 1) return this.values.pop();
    let max = this.values[0];
    let element = this.values.pop();
    this.values[0] = element;
    this.bubbleDown();
    return max;
  }
  bubbleDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightChildIndex;
      }

      if (swap == null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap; // start from the last swaped postition
    }
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
console.log(heap.extractMax());
console.log(heap.values);