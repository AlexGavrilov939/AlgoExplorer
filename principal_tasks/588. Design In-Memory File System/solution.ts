class TrieNode {
  name: string;
  content: string;
  children: Map<string, TrieNode>;
  isFile: boolean;

  constructor(part: string = '', content: string = '', isFile: boolean = false) {
    this.name = part;
    this.content = content;
    this.isFile = isFile;
    this.children = new Map();
  }
}

class Storage {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  searchDirOrFile(path: string): string[] {
    const currentNode: TrieNode = this._search(path)!;
    if (!currentNode) {
      return [];
    }
    if (currentNode.isFile) {
      return [currentNode.name];
    }
    return [...currentNode.children.keys()].sort();
  }

  readFileContent(path: string): string {
    const currentNode: TrieNode = this._search(path)!;
    if (!currentNode || !currentNode.isFile) {
      return '';
    }

    return currentNode.content;
  }

  createDir(path: string): TrieNode {
    let currentNode = this.root;
    const pathParts = path.split('/').filter((x) => x);

    for (const part of pathParts) {
      if (!currentNode.children.has(part)) {
        currentNode.children.set(part, new TrieNode(part));
      }
      currentNode = currentNode.children.get(part)!;
    }

    return currentNode;
  }

  addFileContent(path: string, content: string): void {
    const currentNode = this.createDir(path);
    currentNode.isFile = true;
    currentNode.content += content;
  }

  _search(path: string): TrieNode | null {
    const pathParts = path.split('/').filter((x) => x);
    let currentNode: TrieNode = this.root;

    for (const part of pathParts) {
      if (!currentNode.children.has(part)) {
        return null;
      }
      currentNode = currentNode.children.get(part)!;
    }

    return currentNode;
  }
}

export class FileSystem {
  storage: Storage;

  constructor() {
    this.storage = new Storage();
  }

  ls(path: string): string[] {
    return this.storage.searchDirOrFile(path);
  }

  mkdir(path: string): void {
    this.storage.createDir(path);
  }

  addContentToFile(filePath: string, content: string): void {
    this.storage.addFileContent(filePath, content);
  }

  readContentFromFile(filePath: string): string {
    return this.storage.readFileContent(filePath);
  }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */
