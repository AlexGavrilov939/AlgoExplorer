// TC: O(n), SC: O(1)
export function buyChoco(prices: number[], money: number): number {
  let minPriceX: number = Number.MAX_SAFE_INTEGER;
  let minPriceY: number = Number.MAX_SAFE_INTEGER;

  for (const price of prices) {
    if (price > minPriceX) {
      continue;
    }
    if (price < minPriceY) {
      minPriceX = minPriceY;
      minPriceY = price;
    } else {
      minPriceX = price;
    }
  }
  const sum: number = minPriceX + minPriceY;

  return sum > money ? money : money - sum;
}
