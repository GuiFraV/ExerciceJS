const first = (nums) => {
  let map = new Map();

  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return nums[i];
    }

    map.set(nums[i], i);
  }

  console.log(map);
  return result;
};

// console.log(first([2, 1, 3, 5, 3, 2]));
// console.log(first([1, 2, 3, 4]));
// console.log(first([1, 1]));

/**
 * Trouve l'index du premier caractère non répété
 * @param {string} s - Chaîne à analyser
 * @returns {number} - Index du premier caractère non répété ou -1
 */
const firstNonRepeatingCharacter = (s) => {
  let map = new Map();

  // Compte les occurrences
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Trouve le premier caractère qui n'apparaît qu'une fois
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};

// // Tests
// console.log("statistique ->", firstNonRepeatingCharacter("statistique")); // 0 (s)
// console.log("aabb ->", firstNonRepeatingCharacter("aabb")); // -1 (aucun caractère unique)
// console.log("alexa ->", firstNonRepeatingCharacter("alexa")); // 1 (l)

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

const validPalindromePair = (words) => {
  let map = new Map();

  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      return [map.get(words[i]), i];
    } else {
      map.set(words[i].split("").reverse().join(""), i);
    }
  }

  return [-1, -1];
};

console.log(validPalindromePair(["abc", "cba", "def", "fed"]));
console.log(validPalindromePair(["hello", "world"]));
console.log(validPalindromePair(["ab", "ba", "cc", "ba"]));
