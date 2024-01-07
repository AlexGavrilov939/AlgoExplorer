export function numberOfArithmeticSlices(nums: number[]): number {
  const n: number = nums.length;
  let totalSubsequences: number = 0;
  const differenceCountMap: Map<number, number>[] = new Array(n);

  for (let i = 0; i < n; i++) {
    differenceCountMap[i] = new Map<number, number>();

    for (let j = 0; j < i; j++) {
      const difference: number = nums[i] - nums[j];

      const sum: number = differenceCountMap[j].get(difference) || 0;
      const origin: number = differenceCountMap[i].get(difference) || 0;

      differenceCountMap[i].set(difference, origin + sum + 1);
      totalSubsequences += sum;
    }
  }

  return totalSubsequences;
}
