// TC: O(n + m * k), O(n) - iteration over chars, O(m) elements in words, O(k) - each element letter
// SC: O(1)
export function countCharacters(words: string[], chars: string): number {
  const calcLetterCharCode = (l: string): number => l.charCodeAt(0) - 'a'.charCodeAt(0);
  const buildCharsArrCount = (charsStr: string): number[] => {
    const charsArrCount: number[] = new Array(26).fill(0); // lowercase english letters
    for (const l of charsStr) {
      charsArrCount[calcLetterCharCode(l)]++;
    }
    return charsArrCount;
  };

  const isStringGood = (str: string): boolean => {
    const arrCount: number[] = buildCharsArrCount(chars);
    for (const l of str) {
      if (arrCount[calcLetterCharCode(l)]-- <= 0) {
        return false;
      }
    }

    return true;
  };

  let sumLength: number = 0;
  for (const str of words) {
    if (isStringGood(str)) {
      sumLength += str.length;
    }
  }

  return sumLength;
}
