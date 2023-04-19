// O(n * log(n))
const quickSort = (nums: number[]): number[] => {
    if (nums.length <= 1) return nums;

    let pivot: number = nums[0];
    const leftArr: number[] = [];
    const rightArr: number[] = [];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
            leftArr.push(nums[i]);
        } else {
            rightArr.push(nums[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log('quickSort_result:', quickSort([3, 2, 4, 6, 10, 7, 8, 9, 1, 5]));
