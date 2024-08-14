// 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

const canConstruct = (ransomNote, magazine) => {
  let obj = {};

  for (let i = 0; i < ransomNote.length; i++) {
    if (obj[ransomNote[i]]) {
      obj[ransomNote[i]]++;
    } else {
      obj[ransomNote[i]] = 1;
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    if (obj[magazine[i]]) {
      obj[magazine[i]]--;
    }
  }

  let result = Object.values(obj).map((k) => k <= 0);

  return !result.includes(false);
};

console.log(canConstruct("aab", "aab"));
