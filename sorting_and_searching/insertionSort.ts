// O(n^2)
// Pros: simple, stable, the best performance comparing to other
const insertionSort = (n: number[]): number[] => {
    for (let i = 0; i < n.length; i++) {
        for (let j = i; j > 0; j--) {
            if (n[j - 1] > n[j]) {
                [n[j], n[j - 1]] = [n[j - 1], n[j]];
            }
        }
    }
    return n;
}

console.log('insertionSort_result:', insertionSort([3, 2, 4, 6, 7, 8, 9, 1]));
