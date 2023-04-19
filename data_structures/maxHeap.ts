export class MaxHeap {
    private readonly heap: number[];

    constructor(list) {
        this.heap = [-1]
        list.forEach(item => this.add(item));
    }

    add = (node: number) => {
        this.heap.push(node);
        if (this.heap.length == 2) return node;
        this._heapifyUp();

        return this.heap[1];
    }

    remove = () => {
        if (this.heap.length == 1) return null;
        if (this.heap.length == 2) return this.heap.pop();
        const prevRoot = this.heap[1];
        // bring last val to root
        this.heap[1] = this.heap.pop();
        // reorder top to bottom
        this._heapifyDown();

        return prevRoot;
    }

    sort() {
        const sorted = [];
        let nextVal;
        while ((nextVal = this.remove()) !== null) {
            sorted.push(nextVal);
        }
        return sorted;
    }

    _heapifyUp = () => {
        let i = this.heap.length - 1;
        const val = this.heap[i];

        while (! this._isRoot(i) && this._getParentNode(i) < val) {
            //swap values
            [this.heap[this._getParentIndex(i)], this.heap[i]] = [this.heap[i], this.heap[this._getParentIndex(i)]];
            i = this._getParentIndex(i);
        }
    }

    _heapifyDown = () => {
        if (this.heap.length < 3) return;
        let i = 1;
        const currentVal = this.heap[1];
        let leftVal = this._getLeftNode(i);
        let rightVal = this._getRightNode(i);
        while (
            leftVal !== undefined &&
            (currentVal < leftVal || currentVal < rightVal)
            ) {
            if (
                currentVal < leftVal &&
                (rightVal === undefined || leftVal > rightVal)
            ) {
                // swap
                [this.heap[this._getLeftIndex(i)], this.heap[i]] = [currentVal, leftVal];
                i = this._getLeftIndex(i);
            } else {
                [this.heap[this._getRightIndex(i)], this.heap[i]] = [
                    currentVal,
                    rightVal,
                ];
                i = this._getRightIndex(i);
            }
            leftVal = this._getLeftNode(i);
            rightVal = this._getRightNode(i);
        }
    }

    _isRoot = (i) => i == 1

    _getLeftIndex = (i) => i * 2;

    _getLeftNode = (i) => this.heap[this._getLeftIndex(i)];

    _getRightIndex = (i) => i * 2 + 1;

    _getRightNode = (i) => this.heap[this._getRightIndex(i)];

    _getParentIndex = (i) => Math.floor(i / 2);

    _getParentNode = (i) => this.heap[this._getParentIndex(i)];
}
