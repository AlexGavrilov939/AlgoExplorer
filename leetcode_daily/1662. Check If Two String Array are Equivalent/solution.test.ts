import { arrayStringsAreEqual, arrayStringsAreEqualNaive } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    word1: ['ab', 'c'],
    word2: ['a', 'bc'],
    result: true,
  },
  {
    word1: ['ab', 'c'],
    word2: ['a', 'bc'],
    result: true,
  },
  {
    word1: ['a', 'cb'],
    word2: ['ab', 'c'],
    result: false,
  },
  {
    word1: ['abc', 'd', 'defg'],
    word2: ['abcddefg'],
    result: true,
  },
];

describe('arrayStringsAreEqual', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { word1, word2, result } of testCases) {
      it(`should return ${result} for equal string arrays`, () => {
        expect(arrayStringsAreEqual(word1, word2)).toBe(result);
      });
    }
  });
  console.log(`arrayStringsAreEqual execution time: ${elapsedTime} ms.`);
});

describe('arrayStringsAreEqualNaive', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { word1, word2, result } of testCases) {
      it(`should return ${result} for equal string arrays`, () => {
        expect(arrayStringsAreEqualNaive(word1, word2)).toBe(result);
      });
    }
  });
  console.log(`arrayStringsAreEqualNaive execution time: ${elapsedTime} ms.`);
});
