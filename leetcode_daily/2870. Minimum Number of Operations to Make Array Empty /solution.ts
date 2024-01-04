export function minOperations(nums: number[]): number {
  const counterMap = {};
  for (const num of nums) {
    counterMap[num] = (counterMap[num] || 0) + 1;
  }

  let count: number = 0;
  for (const key in counterMap) {
    if (counterMap[key] == 1) {
      return -1;
    }
    count += Math.ceil(counterMap[key] / 3);
  }

  return count;
}
