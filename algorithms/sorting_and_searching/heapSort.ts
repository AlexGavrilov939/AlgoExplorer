// O(n * log(n))
// Pros: in-place, O(n * log(n)) in the worst case
// Cons: unstable, worse performance comparing to other

import { MinHeap } from "../data_structures/minHeap";

const minHeap = new MinHeap([3, 2, 4, 6, 7, 8, 9, 1]);
console.log("heapSort_result:", minHeap.sort());
