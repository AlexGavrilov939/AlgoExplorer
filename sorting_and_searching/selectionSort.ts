// O(n^2)
// Pros: simple, O(n) swaps
// Const: unstable, worse performance comparing to other
const selectionSort = (n: number[]): number[] => {
    for (let i = 0; i < n.length; i++) {
        let x: number = i;
        for (let j = i; j < n.length; j++) {
            if (n[j] < n[i]) {
                x = j;
            }
        }
        [n[x], n[i]] = [n[i], n[x]];

    }
    return n;
}
console.log('selectionSort_result:', selectionSort([3, 2, 4, 6, 7, 8, 9, 1]));
