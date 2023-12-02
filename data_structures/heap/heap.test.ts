import { Heap, maxHeapComparator, minHeapComparator } from './heap';

describe('Heap', () => {
  test('Min Heap Peek', () => {
    const minHeapInstance = new Heap([4, 1, 2, 7, 8], minHeapComparator);
    expect(minHeapInstance.peek()).toBe(1);
  });

  test('Max Heap Peek', () => {
    const maxHeapInstance = new Heap([4, 1, 2, 7, 8], maxHeapComparator);
    expect(maxHeapInstance.peek()).toBe(8);
  });

  // Add more tests based on your requirements

  test('Add values to Min Heap', () => {
    const minHeapInstance = new Heap([], minHeapComparator);
    minHeapInstance.add(5);
    minHeapInstance.add(3);
    minHeapInstance.add(7);
    expect(minHeapInstance.peek()).toBe(3);
  });
});
