# [661. Image Smoother](https://leetcode.com/problems/image-smoother)

### <span style="color:rgb(0, 184, 163)">Easy</span>

### Description
An **image smoother** is a filter of the size `3 x 3` that can be applied to each cell of an image by rounding down
the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).

![smoother-grid](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/230125e1-bf1d-458b-aca6-191a1e1bb3c1)

Given an `m x n` integer matrix `img` representing the grayscale of an image, return the image after applying the smoother on each cell of it.

#### Example 1
![smooth-grid](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/7f787b55-bf78-440b-a8fc-8a79e6599da4)

```plaintext
Input: img = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[0,0,0],[0,0,0],[0,0,0]]
Explanation:
For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
```

#### Example 2
![smooth2-grid](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/59f7f1d6-81a3-4408-8329-869f0498fdaa)

```plaintext
Input: img = [[100,200,100],[200,50,200],[100,200,100]]
Output: [[137,141,137],[141,138,141],[137,141,137]]
Explanation:
For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
```

#### Constraints:

```plaintext
m == img.length
n == img[i].length
1 <= m, n <= 200
0 <= img[i][j] <= 255
```
## [Approach](./APPROACH.md)

## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
