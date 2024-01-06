export function jobSchedulingBinarySearch(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  const n: number = startTime.length;
  const jobEvents: [number, number, number][] = [];

  for (let i = 0; i < n; i++) {
    jobEvents.push([startTime[i], endTime[i], profit[i]]);
  }

  jobEvents.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < n; i++) {
    // eslint-disable-next-line prefer-destructuring
    startTime[i] = jobEvents[i][0];
  }

  // from constraints
  const memo = new Array(5 * 10 ** 4 + 1).fill(-1);

  const findNextJob = (start: number[], lastEnd: number): number => {
    let left: number = 0;
    let right: number = start.length - 1;

    while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);
      if (start[mid] >= lastEnd) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return right + 1;
  };

  const findMaxProfit = (jobs): number => {
    for (let j = n - 1; j >= 0; j--) {
      // eslint-disable-next-line no-shadow,@typescript-eslint/no-unused-vars
      const [_, end, profit] = jobs[j];
      const nextIdx: number = findNextJob(startTime, end);

      const tmpProfit = nextIdx == n ? profit : profit + memo[nextIdx];
      memo[j] = j == n - 1 ? tmpProfit : Math.max(tmpProfit, memo[j + 1]);
    }

    return memo[0];
  };

  return findMaxProfit(jobEvents);
}

export function jobSchedulingHeap(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  const n: number = startTime.length;
  const jobEvents: [number, number, number][] = [];
  let maxProfit: number = 0;

  // 1. Build job events
  for (let i = 0; i < startTime.length; i++) {
    jobEvents.push([startTime[i], endTime[i], profit[i]]);
  }

  // 2. Sort it in the right way
  jobEvents.sort(([startTimeA, endTimeA], [startTimeB, endTimeB]) => {
    if (startTimeA == startTimeB) {
      return endTimeA - endTimeB;
    }

    return startTimeA - startTimeB;
  });

  // 3. Find the max profit with minHeap
  // I'm going to use fake heap to avoid heap implementation
  const minHeap: number[][] = [];

  for (let i = 0; i < n; i++) {
    // eslint-disable-next-line no-shadow
    const [start, end, profit] = jobEvents[i];

    // Pop it until it's not empty and jobs are not conflicting
    while (minHeap.length > 0 && start >= minHeap[0][0]) {
      maxProfit = Math.max(maxProfit, minHeap[0][1]);
      minHeap.shift();
    }

    // Push the job with sum profit and sort again (because we use an ordinary array as heap)
    minHeap.push([end, profit + maxProfit]);
    minHeap.sort((a, b) => a[0] - b[0]);
  }

  while (minHeap.length > 0) {
    maxProfit = Math.max(maxProfit, minHeap[0][1]);
    minHeap.shift();
  }

  return maxProfit;
}
