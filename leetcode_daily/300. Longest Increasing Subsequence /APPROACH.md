## Approach 1: Dynamic Programming

### Intuition

In dynamic programming, solving problems often involves three key elements.

Firstly, we use an array, usually named `dp` to represent the solution for a given state.
For this problem, `dp[i]` signifies the length of the longest increasing subsequence ending with the `i-th` element.

Secondly, we establish a way to transition between states, denoted by a recurrence relation.
For example, `dp[i] = max(dp[j] + 1)` for all `j` where `nums[j] < nums[i]` and `j < i`.
This helps maximize the solution for each state.

Lastly, we set a straightforward base case.
In this instance, we initialize every `dp` element to `1`,
considering each element on its own as a valid increasing subsequence.

### Algorithm

1. Create an array called `dp`, with a length equal to `nums.length`,
   initializing all elements to `1`. `dp[i]` signifies the length of the longest increasing subsequence
   ending at index `i`.
2. Iterate from `i = 1` to `i = nums.length - 1`. In each iteration, use a second loop from `j = 0` to `j = i - 1`
   (covering all elements before `i`). For each element before `i`, compare if it's smaller than `nums[i]`.
   If true, update `dp[i]` to the maximum of its current value and `dp[j] + 1`.
3. Return the maximum value from `dp`.


### Complexity Analysis

**Time complexity**: `O(N^2)`

**Space complexity**: `O(N)`


## Approach 2: Binary search

### Intuition

In solving this problem, the challenge lies in deciding whether an element is worth adding to the increasing subsequence or not.
Let's take the example `nums = [8, 1, 6, 2, 3, 10]`.<br/>
Starting with an empty subsequence, `sub = []`, we make decisions at each element.
When encountering 8, we add it to sub. For 1, since 8 >= 1, we replace 8 with 1.
Similarly, at 6, we extend the subsequence.
At 2, we replace 6 with 2, anticipating future improvements.
With 3, the sequence grows, and at 10, the final subsequence is `[1, 2, 3, 10]`. The length of sub is our answer.

The optimal strategy appears to be adding each element to the subsequence if it's greater than the largest element in it. Otherwise, through a linear scan, we replace the first element greater than or equal to the current element. This approach accommodates greater elements while maintaining sequence integrity. It's noteworthy that this algorithm doesn't always yield a valid subsequence, but the length consistently matches the length of the longest increasing subsequence due to specific replacement conditions.

### Algorithm

1. Initialize an array `sub` which contains the first element of `nums`.
2. Iterate through the input, starting from the second element. For each element `num`:
   - If `num` is greater than any element in sub, then add `num` to `sub`.
   - Otherwise, perform a binary search in `sub` to find the smallest element that is greater than or equal to `num`.
     Replace that element with `num`.
3. Return the length of `sub`.

### Complexity Analysis

**Time complexity**: `O(N⋅log(N))`

Binary search uses `log(N)` time as opposed to the `O(N)` time of a linear scan.
As a result we have: `O(N⋅log(N))`

**Space complexity**: `O(N)`

When the input is strictly increasing, the `sub` array will be the same size as the input.


## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
