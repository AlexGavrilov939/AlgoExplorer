// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

// Given an array of integers arr and two integers k and threshold,
// return the number of sub-arrays of size k and average greater than or equal to threshold.

// Example:
// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively.
// All other sub-arrays of size 3 have averages less than 4 (the threshold).

// Constraints:
// 1 <= arr.length <= 105
// 1 <= arr[i] <= 104
// 1 <= k <= arr.length
// 0 <= threshold <= 104

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let result: number = 0;
  let sum: number = 0;

  for (let i = 0, p = 0; i < arr.length; i++) {
    if (i - p == k) {
      if (sum / k >= threshold) {
        result += 1;
      }
      sum -= arr[p];
      p += 1;
    }
    sum += arr[i];
  }
  if (sum / k >= threshold) {
    result += 1;
  }

  return result;
}

// 2444. Count Subarrays With Fixed Bounds
// You are given an integer array nums and two integers minK and maxK.
// A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
// The minimum value in the subarray is equal to minK.
// The maximum value in the subarray is equal to maxK.
// Return the number of fixed-bound subarrays.
// A subarray is a contiguous part of an array.

// Example:
// Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
// Output: 2
// Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

// Constraints
// 2 <= nums.length <= 105;
// 1 <= nums[i], minK, maxK <= 106;

function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let l: number = -1;
  let min: number = -1;
  let max: number = -1;
  let result: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) {
      l = i;
    }
    if (nums[i] == minK) {
      min = i;
    }
    if (nums[i] == maxK) {
      max = i;
    }

    result += Math.max(0, Math.min(min, max) - l);
  }
  return result;
}
