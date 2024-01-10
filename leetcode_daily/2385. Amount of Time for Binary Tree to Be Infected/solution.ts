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

export function amountOfTime(root: TreeNode | null, start: number): number {
  let maxDistance = 0;

  // eslint-disable-next-line no-shadow
  const dfs = (node: TreeNode | null, start: number): number => {
    if (node === null) {
      return 0;
    }

    const leftDepth: number = dfs(node.left, start);
    const rightDepth: number = dfs(node.right, start);

    if (node.val == start) {
      maxDistance = Math.max(leftDepth, rightDepth);
      return -1;
    }

    let depth: number;
    if (leftDepth >= 0 && rightDepth >= 0) {
      depth = Math.max(leftDepth, rightDepth) + 1;
    } else {
      const distance = Math.abs(leftDepth) + Math.abs(rightDepth);
      maxDistance = Math.max(maxDistance, distance);
      depth = Math.min(leftDepth, rightDepth) - 1;
    }
    return depth;
  };

  dfs(root, start);
  return maxDistance;
}
