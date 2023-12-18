// TC: O(n), SC: O(1)
export function maxProductDifference(nums: number[]): number {
  let x = 0;
  let y = 0;
  let w = Number.MAX_VALUE;
  let z = Number.MAX_VALUE;

  for (const num of nums) {
    if (num > x) {
      y = x;
      x = num;
    } else {
      y = Math.max(y, num);
    }

    if (num < z) {
      w = z;
      z = num;
    } else {
      w = Math.min(w, num);
    }
  }

  return x * y - w * z;
}

// TC: O(n log n), SC: O(1)
export function maxProductDifferenceSort(nums: number[]): number {
  const len: number = nums.length;
  nums.sort((a, b) => a - b);

  return nums[len - 1] * nums[len - 2] - nums[0] * nums[1];
}
