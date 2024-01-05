### Approach: Trie-Based File System

The code implements a file system management system using a Trie data structure.
The TrieNode class represents each file or directory node, while the Storage class manages
directory creation, file content addition, and retrieval operations.
The FileSystem class serves as the interface for user interactions.

**TrieNode Class**:

Represents nodes in the **Trie** with a `name`, `content` (for files), `isFile` flag, and `children` via a Map.
Constructor initializes nodes with path parts, content (default empty), and isFile flag (default false).

**Storage Class:**

Manages the Trie structure for directory and file operations.
Methods include `searchDirOrFile(path)`, `readFileContent(path)`, `createDir(path)`, and `addFileContent(path, content)`.

**FileSystem Class:**

Serves as an interface to interact with the Trie-based storage.
Methods: `ls(path)`, `mkdir(path)`, `addContentToFile(filePath, content)`, and `readContentFromFile(filePath)`.
This approach efficiently organizes and retrieves file system information using a Trie structure,
providing a systematic and compact solution for file and directory management.


### Complexity Analysis

`ls(path)`. `TC: O(N)`, `SC: O(1)` 

`mkdir(path)`. `TC: O(N)`, `SC: O(N)`

`addContentToFile(filePath, content)`. `TC: O(N)`, `SC: O(N)`

`readContentFromFile(filePath)`. `TC: O(N)`, `SC: O(1)`


## [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
