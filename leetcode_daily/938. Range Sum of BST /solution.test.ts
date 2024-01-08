import { rangeSumBST, TreeNode } from './solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    root: new TreeNode(5, new TreeNode(3), new TreeNode(8)),
    low: 2,
    high: 10,
    result: 16,
  },
  {
    root: new TreeNode(10, new TreeNode(5), new TreeNode(15)),
    low: 5,
    high: 12,
    result: 15,
  },
  {
    root: new TreeNode(
      10,
      new TreeNode(5, new TreeNode(3), new TreeNode(7)),
      new TreeNode(15, new TreeNode(12), new TreeNode(20))
    ),
    low: 5,
    high: 15,
    result: 49,
  },
];

const funcName = rangeSumBST.name;

describe(funcName, () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { root, low, high, result } of testCases) {
      it(`should return ${result} for ${funcName}`, () => {
        expect(rangeSumBST(root, low, high)).toBe(result);
      });
    }
  });
  console.log(`${funcName} execution time: ${elapsedTime} ms.`);
});
