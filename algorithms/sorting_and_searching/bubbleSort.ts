// O(n^2)
// Pros: simple, stable
// Cons: useless
const bubbleSort = (n: number[]): number[] => {
  for (let i = 0; i < n.length; i++) {
    for (let j = 1; j < n.length; j++) {
      if (n[j - 1] > n[j]) {
        [n[j - 1], n[j]] = [n[j], n[j - 1]];
      }
    }
  }

  return n;
};
console.log('bubbleSort_result:', bubbleSort([3, 2, 4, 6, 7, 8, 9, 1]));
