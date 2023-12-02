# [1160. Find Words That Can Be Formed by Characters](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)

### <span style="color:rgb(0, 184, 163)">Easy</span>

### Description
You are given an array of strings `words` and a string `chars`.
A string is good if it can be formed by characters from chars (each character can only be used once).
Return <i>the sum of lengths of all good strings in words.</i>

#### Example 1

```plaintext
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
```

#### Example 2

```plaintext
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
```

#### Constraints:

```plaintext
1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
words[i] and chars consist of lowercase English letters.
```

### [<span style='color: rgb(44, 187, 93)'>Solution</span>](./solution.ts)
