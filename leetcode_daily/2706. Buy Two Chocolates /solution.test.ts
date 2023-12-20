import { buyChoco } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    prices: [5, 10, 2, 8],
    money: 20,
    result: 13,
  },
  {
    prices: [3, 7, 1, 5],
    money: 8,
    result: 4,
  },
  {
    prices: [],
    money: 15,
    result: 15,
  },
  {
    prices: [1, 2, 2],
    money: 3,
    result: 0,
  },
  {
    prices: [3, 2, 3],
    money: 3,
    result: 3,
  },
];

describe('buyChoco', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { prices, money, result } of testCases) {
      it(`should return ${result} for equal string arrays`, () => {
        expect(buyChoco(prices, money)).toBe(result);
      });
    }
  });
  console.log(`arrayStringsAreEqual execution time: ${elapsedTime} ms.`);
});
