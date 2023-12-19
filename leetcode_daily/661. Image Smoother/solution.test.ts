import { imageSmoother } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    input: [[42]],
    result: [[42]],
  },
  {
    input: [
      [10, 10],
      [10, 10],
    ],
    result: [
      [10, 10],
      [10, 10],
    ],
  },
  {
    input: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    result: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
  {
    input: [
      [100, 200, 100],
      [200, 50, 200],
      [100, 200, 100],
    ],
    result: [
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ],
  },
];

describe('imageSmoother', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { input, result } of testCases) {
      it(`should return ${JSON.stringify(result)}`, () => {
        const smoothedImage = imageSmoother([...input]);
        expect(smoothedImage).toStrictEqual([...result]);
      });
    }
  });
  console.log(`imageSmoother execution time: ${elapsedTime} ms.`);
});
