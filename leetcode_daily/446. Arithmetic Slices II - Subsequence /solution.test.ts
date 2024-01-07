import { numberOfArithmeticSlices } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    nums: [2, 4, 6, 8, 10],
    result: 7,
  },
  {
    nums: [7, 7, 7, 7, 7],
    result: 16,
  },
  {
    nums: [1, 7, 15, 8, 20, 30, 56],
    result: 0,
  },
  {
    nums: [1, 2, 1, 2, 4, 1, 5, 10],
    result: 1,
  },
];

const funcName = numberOfArithmeticSlices.name;

describe(funcName, () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { nums, result } of testCases) {
      it(`should return ${result} for ${funcName}`, () => {
        expect(numberOfArithmeticSlices(nums)).toBe(result);
      });
    }
  });
  console.log(`${funcName} execution time: ${elapsedTime} ms.`);
});
