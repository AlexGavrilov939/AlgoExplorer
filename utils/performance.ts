export function measureExecutionTime<T>(
  callback: (...functionArgs: any[]) => T,
  ...args: any[]
): number {
  const start = performance.now();
  callback(...args);
  const end = performance.now();
  return Number((end - start).toFixed(2));
}
