export class Heap {
  private readonly heap: number[] = [];
  private readonly comparator: (a: number, b: number) => boolean;

  constructor(array: number[] = [], comparator) {
    this.comparator = comparator;
    this.heap = this._buildHeap(array);
  }

  size = (): number => this.heap.length;

  add = (value: number): void => {
    this.heap.push(value);
    this._siftUp(this.heap.length - 1);
  };

  peek = (): number => this.heap[0];

  poll = (): number => {
    this.swap(0, this.size() - 1);
    const valueToRemove = this.heap.pop();
    this._siftDown(0, this.size() - 1, this.heap);

    return valueToRemove as number;
  };

  delete = (val: number): boolean => {
    const index = this.heap.indexOf(val);
    if (index !== -1) {
      const bottom = this.heap.pop() as number;
      if (index !== this.heap.length) {
        this.heap[index] = bottom;
        if (this.comparator(bottom, val)) {
          this._siftUp(index);
        } else {
          this._siftDown(index, this.heap.length - 1, this.heap);
        }
      }
      return true;
    }
    return false;
  };

  swap = (i: number, j: number, array: number[] = this.heap): void => {
    [array[i], array[j]] = [array[j], array[i]];
  };

  // O(n)
  _buildHeap = (array: number[]): typeof this.heap => {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this._siftDown(currentIdx, array.length - 1, array);
    }

    return array;
  };

  // T.C: O(logN), S.C : O(1)
  _siftUp = (i: number): void => {
    let parentIdx: number = Math.floor((i - 1) / 2);
    while (i > 0 && this.comparator(this.heap[i], this.heap[parentIdx])) {
      this.swap(i, parentIdx);
      i = parentIdx;
      parentIdx = Math.floor((i - 1) / 2);
    }
  };

  // T.C: O(logN), S.C : O(1)
  _siftDown = (currentIdx: number, endIdx: number, heap: number[]): void => {
    let childLeftIdx = currentIdx * 2 + 1;
    while (childLeftIdx <= endIdx) {
      let childRightIdx: number = currentIdx * 2 + 2;
      if (childRightIdx > endIdx) {
        childRightIdx = -1;
      }

      let idxToSwap;
      if (childRightIdx !== -1) {
        if (this.comparator(heap[childRightIdx], heap[childLeftIdx])) {
          idxToSwap = childRightIdx;
        } else {
          idxToSwap = childLeftIdx;
        }
      } else {
        idxToSwap = childLeftIdx;
      }

      if (this.comparator(heap[idxToSwap], heap[currentIdx])) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childLeftIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  };
}

export const minHeapComparator = (a: number, b: number) => a < b;

export const maxHeapComparator = (a: number, b: number) => a > b;
