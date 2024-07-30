// Exercice : Éliminer les Nombres Consécutifs Répétés
// Problème :

// Étant donné un tableau d'entiers nums, écris une fonction qui élimine tous les nombres consécutifs répétés en place, de sorte que chaque nombre apparaisse seulement une fois. La fonction doit retourner le nouveau nombre d'éléments dans nums après avoir éliminé les doublons consécutifs.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeConsecutiveDuplicates = function (nums) {
  let j = 0; // Pointeur lent

  for (let i = 1; i < nums.length; i++) {
    // Pointeur rapide

    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
};

let nums1 = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4];
let result1 = removeConsecutiveDuplicates(nums1);
console.log(result1); // Output: 4
console.log(nums1); // Output: [1, 2, 3, 4, _, _, _, _, _, _]

let nums2 = [5, 5, 6, 7, 7, 7, 8, 8];
let result2 = removeConsecutiveDuplicates(nums2);
console.log(result2); // Output: 4
console.log(nums2); // Output: [5, 6, 7, 8, _, _, _, _]
