// O(n + k)
// Pros: linear complexity
// Cons: Only for small integers, requires additional space
const countSort = (nums: number[], min: number = 0, max: number = nums.length): number[] => {
    const count: number[] = [];
    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] += 1;
    }
    let j = 0;
    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            nums[j] = i;
            j++;
            count[i]--;
        }
    }

    return nums;
}

console.log('countSort_result:', countSort([3, 2, 4, 6, 10, 11, 7, 8, 9, 1, 5]));
