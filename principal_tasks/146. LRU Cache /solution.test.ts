import { LRUCache } from './solution';
import { measureExecutionTime } from '../../utils/performance';

describe('LRUCache', () => {
  const elapsedTime = measureExecutionTime(() => {
    it('should handle basic operations', () => {
      const lruCache = new LRUCache(2);

      lruCache.put(1, 1);
      expect(lruCache.get(1)).toBe(1);

      lruCache.put(2, 2);
      expect(lruCache.get(2)).toBe(2);
      expect(lruCache.get(1)).toBe(1);

      lruCache.put(3, 3);
      expect(lruCache.get(2)).toBe(-1);
      expect(lruCache.get(2)).toBe(-1);

      lruCache.put(4, 4);
      expect(lruCache.get(1)).toBe(-1);
      expect(lruCache.get(3)).toBe(3);
      expect(lruCache.get(4)).toBe(4);
    });
  });
  console.log(`LRUCache execution time: ${elapsedTime} ms.`);
});
