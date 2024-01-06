import { jobSchedulingHeap, jobSchedulingBinarySearch } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    startTime: [1, 2, 3],
    endTime: [3, 4, 5],
    profit: [50, 10, 40],
    result: 90,
  },
  {
    startTime: [1, 2, 3],
    endTime: [3, 4, 5],
    profit: [30, 20, 10],
    result: 40,
  },
  {
    startTime: [1, 2, 3, 4, 5],
    endTime: [2, 3, 4, 5, 6],
    profit: [10, 20, 30, 40, 50],
    result: 150,
  },
  {
    startTime: [1, 2, 3, 4, 5],
    endTime: [6, 7, 8, 9, 10],
    profit: [50, 40, 30, 20, 10],
    result: 50,
  },
  {
    startTime: [1, 2, 3],
    endTime: [4, 5, 6],
    profit: [10, 20, 30],
    result: 30,
  },
  {
    startTime: [1, 2, 3],
    endTime: [4, 5, 6],
    profit: [30, 20, 10],
    result: 30,
  },
  {
    startTime: [1, 2],
    endTime: [2, 3],
    profit: [50, 60],
    result: 110,
  },
  {
    startTime: [1, 2],
    endTime: [3, 4],
    profit: [30, 40],
    result: 40,
  },
  {
    startTime: [1],
    endTime: [2],
    profit: [100],
    result: 100,
  },
  {
    startTime: [1, 2, 3, 4],
    endTime: [5, 6, 7, 8],
    profit: [20, 30, 40, 50],
    result: 50,
  },
];

describe('jobSchedulingHeap', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { startTime, endTime, profit, result } of testCases) {
      it(`should return ${result} for jobSchedulingHeap`, () => {
        expect(jobSchedulingHeap(startTime, endTime, profit)).toBe(result);
      });
    }
  });
  console.log(`jobSchedulingHeap execution time: ${elapsedTime} ms.`);
});
describe('jobSchedulingBinarySearch', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { startTime, endTime, profit, result } of testCases) {
      it(`should return ${result} for jobSchedulingBinarySearch`, () => {
        expect(jobSchedulingBinarySearch(startTime, endTime, profit)).toBe(result);
      });
    }
  });
  console.log(`jobSchedulingBinarySearch execution time: ${elapsedTime} ms.`);
});
