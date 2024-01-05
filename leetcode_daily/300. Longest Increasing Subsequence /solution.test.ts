import { lengthOfLISBinarySearch, lengthOfLISDP } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    nums: [10, 9, 2, 5, 3, 7, 101, 18],
    result: 4,
  },
  {
    nums: [3, 10, 2, 1, 20],
    result: 3,
  },
  {
    nums: [10, 22, 9, 33, 21, 50, 41, 60, 80],
    result: 6,
  },
  {
    nums: [2, 2, 2, 2, 2],
    result: 1,
  },
  {
    nums: [5, 7, 4, 8, 1, 2, 6],
    result: 3,
  },
];

describe('lengthOfLISBinarySearch', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { nums, result } of testCases) {
      it(`should return ${result} for lengthOfLISBinarySearch`, () => {
        expect(lengthOfLISBinarySearch(nums)).toBe(result);
      });
    }
  });
  console.log(`lengthOfLISBinarySearch execution time: ${elapsedTime} ms.`);
});

describe('lengthOfLISDP', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { nums, result } of testCases) {
      it(`should return ${result} for lengthOfLISDP`, () => {
        expect(lengthOfLISDP(nums)).toBe(result);
      });
    }
  });
  console.log(`lengthOfLISDP execution time: ${elapsedTime} ms.`);
});
