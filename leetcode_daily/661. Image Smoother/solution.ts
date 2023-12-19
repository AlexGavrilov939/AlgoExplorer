// TC: O(m * n), SC: O(1)
export function imageSmoother(img: number[][]): number[][] {
  const m: number = img.length;
  const n: number = img[0].length;

  const X: number = 256;

  const canReachCell = (x: number, y: number): boolean => x >= 0 && x < m && y >= 0 && y < n;

  // Note from Approach description:
  // Assume two independent numbers, p and r.
  // Define another number Y as Y = p * X + r, where X is a constant.
  // To extract p and r, we can use Y / X and Y % X, respectively.

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum: number = 0;
      let count: number = 0;

      // Iterate over all possible 9 indices.
      for (const dx of [-1, 0, 1]) {
        for (const dy of [-1, 0, 1]) {
          const x = dx + i;
          const y = dy + j;
          if (!canReachCell(x, y)) {
            continue;
          }
          // Extract the original value of img[x][y].
          sum += img[x][y] % X;
          count++;
        }
      }

      // Encode the smoothed value in img[i][j].
      // Y = p * X + r, r = img[i][j], p = Math.floor(sum / count), X = 256
      img[i][j] += Math.floor(sum / count) * X;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      img[i][j] = Math.floor(img[i][j] / X);
    }
  }

  return img;
}
