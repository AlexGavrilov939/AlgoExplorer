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

export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const dfs = (node: TreeNode | null, leafs: number[] = []): number[] => {
    if (!node?.left && !node?.right) {
      leafs.push(node!.val);
      return leafs;
    }

    node.left && dfs(node.left, leafs);
    node.right && dfs(node.right, leafs);

    return leafs;
  };

  return dfs(root1).join('-') == dfs(root2).join('-');
}
