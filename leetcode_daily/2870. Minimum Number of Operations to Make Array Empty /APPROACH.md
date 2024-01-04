## Approach: Counting

### Intuition

The problem introduces an array `nums` and two operations. To minimize the number of operations, we count the occurrences of each unique element using a counter. We initialize an accumulator variable `count` to track the total number of operations.

### Algorithm

1. Create a hashmap named `counterMap` to count occurrences of each element in `nums`.
2. Initialize `count` to 0.
3. For each count `key` in `counterMap` values:
   - If `counterMapp[key]` is equal to 1, return -1.
   - Otherwise, increment `count` by the ceiling division of `counterMap[key]` by 3.
4. Return the final value of `count` as the minimum number of operations.



### Complexity Analysis

**Time complexity**: `O(n)`

The solution has a time complexity of O(n), where n is the number of elements in the `nums` array.
This accounts for the iteration over `nums` for counting and the subsequent loop over the `counterMap` hashmap.

**Space complexity**: `O(n)`

The space complexity is O(n) due to the `counterMap` hashmap, which stores at most `n` unique elements from the input array.


## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
