## Approach: One Pass

### Intuition:
In a single pass, we can find both the minimum and second minimum elements in an array.
By initially assuming the smaller of prices[0] and prices[1] as the minimum and the larger as the second minimum,
we update these values as we encounter new elements.

### Algorithm:
1. Assume the smaller of prices[0] and prices[1] as the minimum, and the larger as the second minimum.
2. For every remaining element price in prices:
   - If price is less than the current minimum, update the second minimum and set the minimum to the new element.
   - If price is less than the second minimum but greater than the minimum, update the second minimum.
   - If price is greater than the second minimum, no change is needed.
3. Compute the minimum cost (min_cost) as the sum of minimum and second minimum.
4. If min_cost is less than or equal to the available money, return the remaining amount after buying two chocolates (money - min_cost).
5. If min_cost is greater than the available money, return the initial amount of money.

This one-pass approach efficiently finds the minimum and second minimum, allowing for quick decision-making on chocolate purchases.

### Complexity Analysis

**Time complexity:** `O(n)`

We traverse the array prices once to find the minimum and second minimum prices, taking O(n) time.
All other operations are constant time (O(1)).
The total time complexity is O(n).

**Space complexity:** `O(1)`

We use a few variables, and none of them depends on the input size.
The space complexity is O(1).

## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
