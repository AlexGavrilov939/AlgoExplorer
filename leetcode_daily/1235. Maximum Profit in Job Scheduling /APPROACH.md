## Approach 1: Sorting + DP + Binary Search

### Intuition

Starting from the base case with no more jobs to schedule `position = n`, we iterate through the jobs array from right to left,
updating the `memo` array with previously calculated maximum profits.
For each index, we evaluate both scheduling and skipping the job.

If scheduling the `job` at index `i`, we find the index `nextIndex` of the first non-conflicting job using binary search.
The total profit is the sum of the current job's profit and `memo[nextIndex]`.

If skipping the `job` at index `i`, the maximum profit remains `memo[i+1]`,
representing the best profit starting from the next job.

The maximum profit from these options is stored at `memo[i]`,
indicating the highest profit achievable by scheduling non-conflicting jobs between index `i` and the end of the array.

### Algorithm

1. Gather job details: `startTime`, `endTime`, and `profit`.
2. Sort jobs based on starting times.
3. Iterate backward, calculating `tmpProfit` for each job as the sum of its profit and the maximum profit after the next non-conflicting job (`memo[nextIndex]`).
4. Update `memo[i]` as the maximum between currProfit and `memo[i+1]`, indicating whether scheduling the job at index `i` is more profitable.
5. Return `memo[0]`.

### Complexity Analysis

**Time complexity**: `O(N⋅log(N))`

**Space complexity**: `O(N)`


## Approach 2: Sorting + MinHeap

### Intuition

The strategy involves sorting jobs by `startTime` and selecting, for each job, the most profitable chain of jobs to extend.

In the process, we iterate over previous job chains to find the most profitable one ending at or before the current job starts.
While this approach initially has a time complexity of `O(N^2)`, we can optimize it with two key insights:

1. Efficiently accessing existing chains with the earliest end times is crucial.
2. Since jobs are sorted by start time, if a chain doesn't conflict with the current job, it won't conflict with any future job.

By using a heap as a data structure, we can swiftly access chains with earlier end times
and remove those that have ended while retaining only their maximum profit.

### Algorithm

We solve this job scheduling problem by iteratively checking if each job can extend
a previous chain with the highest profit.
Using a heap, we efficiently find the non-conflicting chain with the maximum profit and append the current job to create a new chain.
The crucial insight is not to immediately push popped chains back into the heap but rather compare their profit with a running maximum (maxProfit).
By the ith iteration, maxProfit holds the highest profit among chains where the ith job can join.

Steps:
1. Store job details (`startTime`, `endTime`, `profit`) in `jobs`
2. Sort `jobs` by starting time.
3. Iterate over `jobs`, popping non-conflicting chains, updating `maxProfit`, and pushing new chains into a heap.
4. After all jobs, compare remaining chains' profit with `maxProfit` and return `maxProfit`.

### Complexity Analysis

**Time complexity**: `O(N⋅log(N))`

**Space complexity**: `O(N)`


## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
