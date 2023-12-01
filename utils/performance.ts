export function measureExecutionTime<T>(callback: (...args: any[]) => T, ...args: any[]): number {
    const start = performance.now();
    callback(...args);
    const end = performance.now();
    return Number((end - start).toFixed(2));
}
