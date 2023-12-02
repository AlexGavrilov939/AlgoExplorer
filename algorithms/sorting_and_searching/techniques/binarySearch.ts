// Given a sorted array, want to find element equal to (equal or greater than) x
// O (log(n))
// Invariant: having different conditions for l and r. In this case: a[l - 1] < x, a[r]

const binarySearch = (sortedArr: number[], target: number): number => {
  let start: number = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    const mid: number = Math.floor((start + end) / 2);
    if (sortedArr[mid] == target) return mid;
    if (sortedArr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};

const nums = [3, 2, 4, 6, 10, 7, 8, 9, 1, 5];
nums.sort((a, b) => a - b);
console.log('binarySearch_result:', binarySearch(nums, 4));
