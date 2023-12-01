import { TreeNode } from "../../data_structures/treeNode";

// Recursive approach T.C: O(n), S.C: O(n)
function preorderTraversal(root: TreeNode | null): number[] {
  const dfsPreOrder = (node: typeof root, stack: number[] = []): number[] => {
    if (node) {
      stack.push(node.val);
      node.left && dfsPreOrder(node.left, stack);
      node.right && dfsPreOrder(node.right, stack);
    }

    return stack;
  };

  return dfsPreOrder(root);
}

// Iterative approach T.C: O(n), S.C: O(n)
function preorderTraversalIterative(root: TreeNode | null): number[] {
  if (!root) return [];

  const traversed: number[] = [];
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    traversed.push(node.val);

    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return traversed;
}
