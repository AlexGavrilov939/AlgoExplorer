import { TreeNode, amountOfTime } from './solution';
import { rangeSumBST } from '../938. Range Sum of BST /solution';
import { measureExecutionTime } from '../../utils/performance';

const testCases = [
  {
    root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    start: 1,
    result: 1,
  },
  {
    root: new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5)),
    start: 2,
    result: 2,
  },
  {
    root: new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4)),
      new TreeNode(3, new TreeNode(5), new TreeNode(6))
    ),
    start: 3,
    result: 3,
  },
  {
    root: new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4)))),
    start: 4,
    result: 3,
  },
  {
    root: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
    start: 2,
    result: 1,
  },
  {
    root: new TreeNode(1),
    start: 1,
    result: 0,
  },
];

const funcName = amountOfTime.name;

describe(funcName, () => {
  const elapsedTime = measureExecutionTime(() => {
    for (const { root, start, result } of testCases) {
      it(`should return ${result} for ${funcName}`, () => {
        expect(amountOfTime(root, start)).toBe(result);
      });
    }
  });
  console.log(`${funcName} execution time: ${elapsedTime} ms.`);
});
