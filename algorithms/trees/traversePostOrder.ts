import { TreeNode } from "../../data_structures/treeNode";

// Recursive approach T.C: O(n), S.C: O(n)
function postorderTraversalRecursive(root: TreeNode | null): number[] {
  const dfsPostOrder = (node: typeof root, stack: number[] = []): number[] => {
    if (node) {
      node.right && dfsPostOrder(node.right, stack);
      node.left && dfsPostOrder(node.left, stack);
      stack.push(node.val);
    }

    return stack;
  };
  return dfsPostOrder(root);
}

// Iterative approach T.C: O(n), S.C: O(n)
function postorderTraversalIterative(root: TreeNode | null): number[] {
  if (!root) return [];

  const traversed: number[] = [];
  const stackA: TreeNode[] = [root];
  const stackB: TreeNode[] = [];

  while (stackA.length > 0) {
    const node = stackA.pop();
    node?.left && stackA.push(node.left);
    node?.right && stackA.push(node.right);
    stackB.push(node);
  }

  while (stackB.length > 0) {
    const node = stackB.pop();
    traversed.push(node.val);
  }

  return traversed;
}
