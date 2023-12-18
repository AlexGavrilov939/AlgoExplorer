type CacheItem = {
  freq: number;
  value: number;
};

export class LFUCache {
  private cache: Map<number, CacheItem>;
  private freqs: Map<number, Set<number>>;
  private minFreq: number;
  private capacity: number;

  private insert(key: number, frequency: number, value: number): void {
    this.cache.set(key, { freq: frequency, value });
    this.freqs.set(frequency, this.freqs.get(frequency) || new Set());
    this.freqs.get(frequency)!.add(key);
  }

  constructor(capacity: number) {
    this.cache = new Map();
    this.freqs = new Map();
    this.minFreq = 0;
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }

    const { freq, value } = this.cache.get(key) as CacheItem;
    const keys = this.freqs.get(freq);

    keys!.delete(key);

    if (keys!.size === 0) {
      this.freqs.delete(freq);

      if (this.minFreq === freq) {
        this.minFreq++;
      }
    }

    this.insert(key, freq + 1, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.capacity <= 0) {
      return;
    }

    if (this.cache.has(key)) {
      const cacheItem = this.cache.get(key);
      this.cache.set(key, { freq: cacheItem!.freq, value });
      this.get(key);
      return;
    }

    if (this.cache.size === this.capacity) {
      const keys = this.freqs.get(this.minFreq);
      const keyToDelete = keys!.values().next().value;

      this.cache.delete(keyToDelete);
      keys!.delete(keyToDelete);

      if (keys!.size === 0) {
        this.freqs.delete(this.minFreq);
      }
    }

    this.minFreq = 1;
    this.insert(key, 1, value);
  }
}
