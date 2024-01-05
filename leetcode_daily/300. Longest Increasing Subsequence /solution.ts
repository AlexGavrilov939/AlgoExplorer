// TC: O(N^2), SC: O(N)
export function lengthOfLISDP(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1);
  // dp: [1, 2, 1, 3, 3, 4]
  // => 4
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// TC: O(N*logN), SC: O(N)
export function lengthOfLISBinarySearch(nums: number[]): number {
  const bisectLeft = (arr: number[], target: number): number => {
    let left: number = 0;
    let right: number = arr.length;

    while (left < right) {
      const mid: number = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  };

  const sub: number[] = [];
  for (const num of nums) {
    const i: number = bisectLeft(sub, num);

    if (i == sub.length) {
      sub.push(num);
    } else {
      sub[i] = num;
    }
  }

  return sub.length;
}
