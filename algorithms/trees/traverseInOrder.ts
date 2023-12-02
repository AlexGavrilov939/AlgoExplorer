import { TreeNode } from '../../data_structures/treeNode';

// Recursive approach T.C: O(n), S.C: O(n)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function inorderTraversalRecursive(root: TreeNode | null): number[] {
  const dfsInOrder = (node: TreeNode | null, stack: number[] = []): number[] => {
    if (node) {
      node.left && dfsInOrder(node.left, stack);
      stack.push(node.val);
      node.right && dfsInOrder(node.right, stack);
    }
    return stack;
  };

  return dfsInOrder(root);
}

// Iterative approach T.C: O(n), S.C: O(n)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function inorderTraversalIterative(root: TreeNode | null): number[] {
  if (!root) return [];

  let head: TreeNode | null = root;
  const stack: TreeNode[] = [];
  const traversed: number[] = [];
  while (stack.length > 0 || head) {
    while (head) {
      stack.push(head);
      head = head.left;
    }
    const node: TreeNode = stack.pop() as TreeNode;
    traversed.push(node.val);
    head = node.right;
  }

  return traversed;
}
