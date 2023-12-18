import { LFUCache } from './solution';
import { measureExecutionTime } from '../../utils/performance';

describe('LFUCache', () => {
  const elapsedTime = measureExecutionTime(() => {
    it('should handle basic operations', () => {
      const lfu = new LFUCache(2);

      lfu.put(1, 1); // cache=[1,_], cnt(1)=1
      lfu.put(2, 2); // cache=[2,1], cnt(2)=1, cnt(1)=1
      expect(lfu.get(1)).toBe(1); // cache=[1,2], cnt(2)=1, cnt(1)=2

      lfu.put(3, 3);
      expect(lfu.get(2)).toBe(-1); // return -1 (not found)
      expect(lfu.get(3)).toBe(3);

      lfu.put(4, 4);
      expect(lfu.get(1)).toBe(-1);
      expect(lfu.get(3)).toBe(3); // cache=[3,4], cnt(4)=1, cnt(3)=3
      expect(lfu.get(4)).toBe(4);
    });
  });
  console.log(`LFUCache execution time: ${elapsedTime} ms.`);
});
