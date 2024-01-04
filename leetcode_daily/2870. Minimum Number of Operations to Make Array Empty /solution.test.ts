import { minOperations } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    nums: [1, 2, 3, 3, 4, 4, 4],
    result: -1,
  },
  {
    nums: [2, 3, 3, 2, 2, 4, 2, 3, 4],
    result: 4,
  },
  {
    nums: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
    result: 6,
  },
  {
    nums: [1, 2, 3, 1, 2, 3, 1, 2, 3],
    result: 3,
  },
];

const funcName = minOperations.name;

describe(funcName, () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { nums, result } of testCases) {
      it(`should return ${result} for ${funcName}`, () => {
        expect(minOperations(nums)).toBe(result);
      });
    }
  });
  console.log(`${funcName} execution time: ${elapsedTime} ms.`);
});
