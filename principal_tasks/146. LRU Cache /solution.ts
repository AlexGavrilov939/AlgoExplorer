// TC: O(1) for get and put, TC: O(capacity)
export class LRUCache {
  capacity: number;
  cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    this.resetKeyOrder(key);
    return this.cache.get(key)!;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.set(key, value);
      this.resetKeyOrder(key);
      return;
    }

    if (this.cache.size == this.capacity) {
      this.evictLRU();
    }
    this.cache.set(key, value);
    this.resetKeyOrder(key);
  }

  private resetKeyOrder(key: number): void {
    const value: number = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
  }

  private evictLRU(): void {
    const keyToEvict = this.cache.keys().next().value;
    this.cache.delete(keyToEvict);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
