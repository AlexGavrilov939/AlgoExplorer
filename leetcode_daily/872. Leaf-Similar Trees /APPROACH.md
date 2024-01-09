## Approach: DFS recursive implementation

### Intuition

To find the leaf value sequence of a tree, we use a **DFS**.
Our `dfs` function writes the node's value if it is a leaf,
and then recursively explores each child.
This is guaranteed to visit each leaf in left-to-right order, as left-children are fully explored before right-children.

So we can traverse both trees. All that remains is to check whether the results are the same.

### Complexity Analysis

**Time complexity**: `O(N + M)` where N and M are length of trees.

**Space complexity**: `O(N + M)` - the space used to recursive traverse both trees.


## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
