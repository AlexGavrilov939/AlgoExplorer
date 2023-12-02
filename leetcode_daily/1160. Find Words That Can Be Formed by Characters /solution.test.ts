import { countCharacters } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    words: ['cat', 'bt', 'hat', 'tree'],
    chars: 'atach',
    result: 6,
  },
  {
    words: ['hello', 'world', 'leetcode'],
    chars: 'welldonehoneyr',
    result: 10,
  },
];

describe('countCharacters', () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { words, chars, result } of testCases) {
      it(`should return ${result} for equal string arrays`, () => {
        expect(countCharacters(words, chars)).toBe(result);
      });
    }
  });
  console.log(`countCharacters execution time: ${elapsedTime} ms.`);
});
