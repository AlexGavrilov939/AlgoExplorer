<div align="left">
  
[![Checks][checks]][actions]
[![Contributions Welcome][welcome]](CONTRIBUTING.md)
[![standard.js][standard-logo]][standard-js]
  
</div>

<!-- Front Matter -->

# AlgoExplorer - data structures and algorithms in JS/TS.

Best practices, examples, and exercises. Everything you need to prepare for the algorithmic section of the interview if you are going to take it at JS/TS.
Most of the examples and implementations are mainly added in the Typescript language, but you can easily turn it into JS.

<!-- Banner -->

[![JavaScript Banner][banner]](DIRECTORY.md)

---

<!-- Disclaimer -->
<div align="left">
These examples are for learning purposes only. For improved performance and security,<br/>
use specialized implementations of these algorithms and structures.<br/>
Note: API stability is not guaranteed.
</div>

---

## Index of algo topics

- [Asymptotic (Big O notation)](./asymptotics/Asymptotics.md)
- [Data structures](./data_structures/INDEX.md)
  - [Fixed size array](#FixedSizeArray)
  - [Dynamic array (vector)](#DynamicArray)
  - [Stack](#Stack)
  - [Dequeue](#Dequeue)
  - [Queue](#Queue)
  - [ArrayList](#ArrayList)
  - [LinkedList](#LinkedList)
  - [DoublyLinkedList](#DoublyLinkedList)
  - [Hash Table](#HashTable)
  - [Heap](./data_structures/heap/INDEX.md)
  - [Binary Search Tree](#BinarySearchTree)
  - [Practice](#Practice)
  - [Summary Complexity Table](#SummaryComplexityTable)
- [Algorithms & Techniques](#Algorithms)
  - [Sorting and Searching](#SortingSearching)
  - [Bitwise](#Bitwise)
  - [Graphs](#Graphs)
    - [Disjoint Set](./)
    - [DFS](./)
    - [BFS](./)
    - [Minimum Spanning Tree](./)
    - [Single Shortest Path](./)
    - [Topological Sorting](./)
  - [Strings](#Graphs)
  - [Greedy](#Greedy)
  - [Dynamic Programming](#DP)
- [Principal Tasks](./principal_tasks/INDEX.md)
  - [Graphs](./principal_tasks/INDEX.md#graphs)
  - [Design](./principal_tasks/INDEX.md#design)
    - [[M] LRU Cache](./principal_tasks/146.%20LRU%20Cache%20/PROBLEM.md)
    - [[H] LFU Cache](./principal_tasks/460.%20LFU%20Cache/PROBLEM.md)
    - [[H] In-Memory FileSystem](./principal_tasks/588.%20Design%20In-Memory%20File%20System/PROBLEM.md)
- [LeetCode daily problems](./leetcode_daily/INDEX.md)

---

Before contributing to this repository, make sure to read our [Contribution Guidelines](CONTRIBUTING.md). You can look
at the [issues with a "help wanted" label][help-wanted] for inspiration regarding what to implement.
Our maintainers will guide you through how to make your contribution properly if you make any mistakes.
The names of the maintainers of this repository are listed in the [CODEOWNERS file](.github/CODEOWNERS).

You can find a list of the algorithms currently in the repository in the [directory](DIRECTORY.md).<br/>
Explanations of many of the algorithms can be found in the [wiki][explanation].

## License & Copyright

The materials herein are all &copy; 2023 Alex Gavrilov.

I am providing code and resources in this repository to you under an open-source license. Because this is my personal repository, the license you receive for my code and resources is from me and not my employer.

<!-- Banner Image -->

[banner]: https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/9a385e3a-b494-44a7-917e-9a09677b0b62

<!-- Badge Links -->

[standard-logo]: https://img.shields.io/badge/code%20style-standardjs-%23f3df49
[welcome]: https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=0059b3
[checks]: https://img.shields.io/github/actions/workflow/status/TheAlgorithms/JavaScript/Ci.yml?branch=master&label=checks

<!-- External Links -->

[standard-js]: https://standardjs.com/
[actions]: https://github.com/AlexGavrilov939/AlgoExplorer/actions
[explanation]: https://github.com/AlexGavrilov939/AlgoExplorer/wiki
[help-wanted]: https://github.com/AlexGavrilov939/AlgoExplorer/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22
