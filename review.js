const mergeAlternately = (word1, word2) => {
    let res = [];

    // Determine the maximum length between word1 and word2
    const maxLength = (word1.length >= word2.length) ? word1.length : word2.length;

    // Traverse both words simultaneously
    for (let i = 0; i < maxLength; i++) {
        // Add the character from word1 to res if it exists
        if (i < word1.length) {
            res[i] = word1[i];
        }
        // Add the character from word2 to res if it exists
        if (i < word2.length) {
            res[i + word1.length] = word2[i];
        }
    }

    // Return the result as a string
    return res.join("");
}
