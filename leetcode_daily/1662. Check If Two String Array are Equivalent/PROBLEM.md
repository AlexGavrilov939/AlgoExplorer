# [1662. Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/)

### <span style="color:rgb(0, 184, 163)">Easy</span>

### Description

The product difference between two pairs `(a, b)` and `(c, d)` is defined as `(a * b) - (c * d)`.
For example, the product difference between `(5, 6)` and `(2, 7)` is calculated as:
`(5 * 6) - (2 * 7) = 16`

Given an integer array `nums`, the task is to choose four distinct indices `w, x, y, and z` such that the **product difference** 
between pairs `(nums[w], nums[x])` and `(nums[y], nums[z])` is maximized.

Return the maximum such product difference.

#### Example 1

```plaintext
Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
```

#### Example 2

```plaintext
Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
```

#### Constraints:

```plaintext
4 <= nums.length <= 104
1 <= nums[i] <= 104
```

### [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
