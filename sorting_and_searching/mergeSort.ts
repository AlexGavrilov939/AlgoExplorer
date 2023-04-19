// T(n) = 2*T(n/2) + n = O(n*log(n))
// Pros: stable, O(n * log(n)) in the worst case
// Cons: worse performance comparing to other
const mergeSort = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    const mid: number = Math.floor(nums.length / 2);

    const left: number[] = mergeSort(nums.slice(0, mid));
    const right: number[] = mergeSort(nums.slice(mid));

    return merge(left, right);
}

const merge = (left: number[], right: number[]): number[] => {
    const sortedArr: number[] = [];
    while (left.length > 0 && right.length > 0) {
        sortedArr.push(left[0] < right[0] ?
            left.shift():
            right.shift());
    }

    return [...sortedArr, ...left, ...right];
}

console.log('mergeSort_result:', mergeSort([3, 2, 4, 6, 10, 7, 8, 9, 1, 5]));
