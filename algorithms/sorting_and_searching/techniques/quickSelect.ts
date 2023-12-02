// O(n) on best case, average case, O(n^2) on worst case
const quickSelect = (nums: number[], k: number): number => {
  const position: number = k - 1;
  let startIdx: number = 0;
  let endIdx: number = nums.length - 1;

  while (true) {
    if (startIdx > endIdx) {
      console.log('Should never arrive here!');
      return -1;
    }
    const pivotIdx: number = startIdx;
    let leftIdx: number = pivotIdx + 1;
    let rightIdx: number = endIdx;

    while (leftIdx <= rightIdx) {
      if (nums[leftIdx] > nums[pivotIdx] && nums[rightIdx] < nums[pivotIdx]) {
        [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
      }
      if (nums[leftIdx] <= nums[pivotIdx]) {
        leftIdx += 1;
      }
      if (nums[rightIdx] >= nums[pivotIdx]) {
        rightIdx -= 1;
      }
    }
    [nums[rightIdx], nums[pivotIdx]] = [nums[pivotIdx], nums[rightIdx]];
    if (rightIdx == position) return nums[rightIdx];
    if (rightIdx < position) {
      startIdx = rightIdx + 1;
    } else {
      endIdx = rightIdx - 1;
    }
  }
};

console.log('quickSelect_result', quickSelect([8, 5, 2, 9, 7, 6, 3], 1));
