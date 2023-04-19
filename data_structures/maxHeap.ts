class MaxHeap {
    private readonly heap: number[];

    constructor(nums: number[]) {
        this.heap = [-1];
        nums.forEach(item => this.add(item));
    }

    add = (num: number) => {
        this.heap.push(num);

        return num;
    }

    getMax = () => {
        return this.heap.length == 1 ? null: this.heap[1];
    }

    _heapifyUp = () => {
        let i = 1;
    }

    _heapifyDown = () => {

    }

    _isRoot = (i: number): boolean => i == 1

    _getParentIndex = (i: number): number => Math.floor(i / 2);

    _getParentNode = (i: number): number => this.heap[this._getParentIndex(i)];

    _getLeftIndex = (i: number): number => i * 2;

    _getLeftNode = (i: number): number => this.heap[this._getLeftIndex(i)];

    _getRightIndex = (i: number): number => i * 2 + 1

    _getRightNode = (i: number): number => this.heap[this._getRightIndex(i)]

}

const heap = new MaxHeap([1, 2, 3]);
