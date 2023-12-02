// Given weighted graph (without negative cycles but with possible negative edges), find shortest path lengths
// from vertex s to all other vertices

// Applicability: short path with restrictions (for example: at most k stops)
// CAN'T WORK WITH NEGATIVE WEIGHTS

// Video explanation of Bellman Ford https://www.youtube.com/watch?v=5eIK3zUdYmE

// Problem:
// There are n cities connected by some number of flights. You are given an array flights where flights[i] = [from[i], toi, price[i]]
// indicates that there is a flight from city from[i] to city toi with cost price[i].
//
// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k
// stops. If there is no such route, return -1.

// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

// T.C.: O (E * K), E - number of edges, K - the input param
// (+can be solved with BFS)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const algoBellmanFord = () => {};
