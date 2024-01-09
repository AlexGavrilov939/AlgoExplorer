import { leafSimilar, TreeNode } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    root1: new TreeNode(5, new TreeNode(3), new TreeNode(8)),
    root2: new TreeNode(5, new TreeNode(3), new TreeNode(8)),
    result: true,
  },
  {
    root1: new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(7)), new TreeNode(15)),
    root2: new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(7)), new TreeNode(15)),
    result: true,
  },
  {
    root1: new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3)),
    root2: new TreeNode(1, new TreeNode(3, new TreeNode(5), new TreeNode(4)), new TreeNode(2)),
    result: false,
  },
  {
    root1: new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3)),
    root2: new TreeNode(1, null, new TreeNode(3, new TreeNode(2), new TreeNode(4))),
    result: false,
  },
];

const funcName = leafSimilar.name;

describe(funcName, () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { root1, root2, result } of testCases) {
      it(`should return ${result} for ${funcName}`, () => {
        expect(leafSimilar(root1, root2)).toBe(result);
      });
    }
  });
  console.log(`${funcName} execution time: ${elapsedTime} ms.`);
});
