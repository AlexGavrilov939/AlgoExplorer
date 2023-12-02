// Complexity:
// Time: Best: O(n * log(n)), Average: O(n * log(n)), Worst: O(n ^ 2)
// Space: O (log(n))

// Pros: In-place, better performance comparing to other
const quickSort = (nums: number[]): number[] => {
  quickSortHelper(nums, 0, nums.length - 1);
  return nums;
};

const quickSortHelper = (nums: number[], startIdx: number, endIdx: number): number[] => {
  if (startIdx >= endIdx) return;

  const pivotIdx: number = startIdx;
  let leftIdx: number = startIdx + 1;
  let rightIdx: number = endIdx;

  while (rightIdx >= leftIdx) {
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
  [nums[pivotIdx], nums[rightIdx]] = [nums[rightIdx], nums[pivotIdx]];

  const beforePivotArraySize = rightIdx - 1 - startIdx;
  const afterPivotArraySize = endIdx - (rightIdx + 1);

  if (beforePivotArraySize < afterPivotArraySize) {
    quickSortHelper(nums, startIdx, rightIdx - 1);
    quickSortHelper(nums, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(nums, rightIdx + 1, endIdx);
    quickSortHelper(nums, startIdx, rightIdx - 1);
  }
};

// Just for understanding
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const quickSortEasyImplementation = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;

  // Choose pivot point x, split array into three parts: <x, =x, >x. Recursively sort <x and >x parts.
  // If pivot point is random then expected complexity is O(n * log(n))
  const pivot: number = nums[0];
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      leftArr.push(nums[i]);
    } else {
      rightArr.push(nums[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log('quickSort_result:', quickSort([3, 2, 4, 6, 10, 7, 8, 9, 1, 5]));
