import { FileSystem } from './solution';
import { measureExecutionTime } from '../../utils/performance';

describe('In-Memory FileSystem', () => {
  const fileSystem = new FileSystem();

  const elapsedTime = measureExecutionTime(() => {
    it('Create directories and list contents', () => {
      fileSystem.mkdir('/home/user/documents');
      expect(fileSystem.ls('/home')).toEqual(['user']);
      expect(fileSystem.ls('/home/user')).toEqual(['documents']);
    });

    it('should add content to a file and read content', () => {
      fileSystem.addContentToFile('/home/user/documents/file1.txt', 'Hello, World!');
      expect(fileSystem.readContentFromFile('/home/user/documents/file1.txt')).toEqual(
        'Hello, World!'
      );
    });

    it('should list contents of a directory with no files', () => {
      expect(fileSystem.ls('/')).toEqual(['home']);
    });

    it('should create a directory with spaces in the name', () => {
      fileSystem.mkdir('/my documents');
      expect(fileSystem.ls('/')).toEqual(['home', 'my documents']);
    });

    it('should attempt to read content from a non-existent file', () => {
      expect(fileSystem.readContentFromFile('/nonexistent/file.txt')).toEqual('');
    });

    it('should add content to an existing file', () => {
      fileSystem.addContentToFile('/home/user/documents/file1.txt', ' Updated Content!');
      expect(fileSystem.readContentFromFile('/home/user/documents/file1.txt')).toEqual(
        'Hello, World! Updated Content!'
      );
    });

    it('should create a new file in a different directory', () => {
      fileSystem.addContentToFile('/my documents/file2.txt', 'New File Content!');
      expect(fileSystem.readContentFromFile('/my documents/file2.txt')).toEqual(
        'New File Content!'
      );
    });

    it('should list contents of the root directory', () => {
      expect(fileSystem.ls('/')).toEqual(['home', 'my documents']);
    });

    it('should create a deep directory structure', () => {
      fileSystem.mkdir('/home/user/documents/projects/project1/src');
      expect(fileSystem.ls('/home/user/documents/projects')).toEqual(['project1']);
      expect(fileSystem.ls('/home/user/documents/projects/project1/src')).toEqual([]);
    });

    it('should attempt to read content from a directory', () => {
      expect(fileSystem.readContentFromFile('/home/user/documents')).toEqual('');
    });
  });

  console.log(`In-Memory FileSystem execution time: ${elapsedTime} ms.`);
});
