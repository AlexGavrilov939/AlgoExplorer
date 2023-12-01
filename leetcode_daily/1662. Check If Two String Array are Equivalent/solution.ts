// TC: O(n), SC: O(1)
export function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let w1p: number = 0, w2p: number = 0;
    let s1p: number = 0, s2p: number = 0;

    while (w1p < word1.length && w2p < word2.length) {
        if (word1[w1p].charAt(s1p++) !== word2[w2p].charAt(s2p++)) {
            return false;
        }
        if (s1p === word1[w1p].length) {
            w1p++;
            s1p = 0;
        }
        if (s2p === word2[w2p].length) {
            w2p++;
            s2p = 0;
        }
    }

    return w1p === word1.length && w2p === word2.length;
}

// TC: O(n), SC: O(n)
export function arrayStringsAreEqualNaive(word1: string[], word2: string[]): boolean {
    const str1 = word1.join('');
    const str2 = word2.join('');

    return str1 == str2;
}
