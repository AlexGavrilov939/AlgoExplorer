export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum: number = 0;
  const dfs = (node: TreeNode | null, l: number, h: number): void => {
    if (!node) {
      return;
    }

    if (node.val >= l && node.val <= h) {
      sum += node.val;
    }

    if (high > node.val) {
      dfs(node.right, l, h);
    }

    if (low < node.val) {
      dfs(node.left, l, h);
    }
  };

  dfs(root, low, high);
  return sum;
}
