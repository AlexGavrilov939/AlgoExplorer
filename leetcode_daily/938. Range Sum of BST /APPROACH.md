## Approach: DFS recursive implementation

### Intuition

We're exploring a tree using a method called **DFS**.
If a node's value `node.val` is not in the range `[low, high]`, like if it's less than `low`,
we can focus on the right branch since it might have nodes within the `[low, high]` range.

We've got two ways to do this: one using a recursive approach and another using an iterative one.

Here I looked at the recursive approach (you can convert it into an iterative one yourself with ease)


### Complexity Analysis

**Time complexity**: `O(N)` where N is the number of nodes in the tree.

**Space complexity**: `O(N)`

In both the recursive and iterative versions, we're doing a `DFS` traversal.<br/>
The recursive solution needs extra space for the function call stack,
and the iterative one needs space for the stack.
In the worst-case scenario, when the tree is like a chain,
and we go all the way down to the leaf node, the stack space needed is `O(N)`.


## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
