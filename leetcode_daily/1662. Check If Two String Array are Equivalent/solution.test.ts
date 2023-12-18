import { maxProductDifference, maxProductDifferenceSort } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    nums: [5, 6, 2, 7, 4],
    result: 34,
  },
  {
    nums: [4, 2, 5, 9, 7, 4, 8],
    result: 64,
  },
  {
    nums: [1, 6, 7, 5, 2, 4, 10, 6, 4],
    result: 68,
  },
  {
    nums: [8, 3, 5, 7],
    result: 41,
  },
];

describe('maxProductDifference', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { nums, result } of testCases) {
      it(`should return ${result} for equal string arrays`, () => {
        expect(maxProductDifference(nums)).toBe(result);
      });
    }
  });
  console.log(`maxProductDifference execution time: ${elapsedTime} ms.`);
});

describe('maxProductDifferenceSort', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { nums, result } of testCases) {
      it(`should return ${result} for equal string arrays`, () => {
        expect(maxProductDifferenceSort(nums)).toBe(result);
      });
    }
  });
  console.log(`maxProductDifferenceSort execution time: ${elapsedTime} ms.`);
});
