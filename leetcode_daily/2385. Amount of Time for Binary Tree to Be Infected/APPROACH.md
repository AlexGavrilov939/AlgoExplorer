## Approach: One-Pass DFS

### Intuition

Imagine you're in a **park** (think of it as a tree structure in programming) and you need to find the **farthest point** from where you are. But there's a twist: you can only walk through the park **once**! Sounds like a fun challenge, right?

### Step-by-Step Guide:

1. ### 🕵️‍♂️ **Playing Detective**:
   We're like detectives, looking for clues (depths of paths) during our single stroll in the park (our tree).

2. ### 📍 **Special Spot (Start Node)**:
   - When we reach our special spot (the 'start' node), we do a little happy dance and mark it with a `-1`. This is our reference point.

3. ### 🗺️ **Finding the Farthest Point**:
   - **At a Dead End?** If we're at a spot with no more paths (`null` node), there's nowhere else to go.
   - **At the Special Spot?** If we're at our special spot, we look how far we can go from here.
   - **Just a Regular Spot:** If we're at a regular spot, we look both ways (left and right) and choose the path that goes farther.
   - **Path Leads Back to Special Spot?** If one of the paths leads back to our special spot, we calculate how far the other path goes in the opposite direction. This helps find the farthest point from our starting point.

And that's it! By the end of our walk, we've figured out the farthest point from our special spot in just one go. It's like solving a fun puzzle on a walk in the park! 🌳🚶‍♂️🔍

### Algorithm

---

## 🚀 The Park Explorer Algorithm 🚀

1. ### 🌲 Each New Tree Spot:
   - At every new tree (root), we start with a step count `depth = 0`.
   - If we find a spot with no more trees (`root == null`), we just mark `depth = 0` and take a break.

2. ### 🔀 Checking Both Paths:
   - We take a step to the right tree (`root.right`) and note how many steps we took in `rightDepth`.
   - We then take a step to the left tree (`root.left`) and write down the steps in `leftDepth`.

3. ### 📍 Special Spot Found?
   - **Is this the Special Spot?** (`root = start`):
      - We update our notebook (`maxDistance`) with the deepest point from here, using the bigger number between `leftDepth` and `rightDepth`.
      - We dance a bit and mark `depth = -1` to remember this is our special spot.

4. ### 🔄 Regular Spot Calculations:
   - **Just a Regular Spot?** (both `leftDepth` and `rightDepth` are 0 or more):
      - We calculate how far we've come: `depth = max(leftDepth, rightDepth) + 1`.

5. ### 🕵️‍♂️ Detecting the Special Spot Nearby:
   - **Special Spot in this Subtree?**:
      - We calculate the distance to the furthest tree in the other direction (`distance = abs(leftDepth) + abs(rightDepth)`).
      - Update our notebook if this new distance is bigger (`maxDistance = max(maxDistance, distance)`).
      - Our step count goes negative (`depth = min(leftDepth, rightDepth) - 1`) to signal that the special spot is somewhere close.

6. ### 🗺️ The Big Picture:
   - We start our adventure with `traverse(root, start)`.
   - At the end, we share the story of our farthest discovery from our special spot by showing our `maxDistance` notebook.

And there you have it! A fun and adventurous way to explore our tree park and find the farthest point from our special spot. Happy exploring! 🌳🚶‍♂️✨



### Complexity Analysis

**Time complexity:** `O(n)`

- Just like how long it takes to visit every tree in the park, our depth-first search (DFS) takes time proportional to the number of trees (`n`). We check out each tree just once, making our exploration time `O(n)`.

**Space complexity:** `O(n)`

- Think of space complexity like how much space we need in our backpack for a map of the park. For DFS, the space we need depends on how many layers (depth) the park has.
- In a super twisty park (like a tree that's more like a long path), our map gets as big as the number of trees, since we're diving deep tree by tree. So, in the most extreme case, our backpack space or space complexity also becomes `O(n)`.

## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
