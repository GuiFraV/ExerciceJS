// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

const jump = (nums) => {
  let maxJump = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= maxJump) {
      maxJump = i;
    }
  }

  return maxJump == 0;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([3, 2, 1, 0, 4]));

// Problème : Sauts Minimaux
// Vous avez un tableau d'entiers non négatifs nums où chaque élément représente le nombre maximum de pas que vous pouvez avancer à partir de cette position. Votre objectif est de déterminer le nombre minimum de sauts nécessaires pour atteindre le dernier index du tableau.
// Exemple :
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explication: Le chemin minimum est de sauter du premier index au deuxième index, puis de sauter directement au dernier index.
// Contraintes :

// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 1000
// Il est garanti que vous pouvez toujours atteindre le dernier index.

// Votre tâche est d'écrire une fonction minJumps(nums) qui prend en entrée le tableau nums et retourne le nombre minimum de sauts nécessaires pour atteindre le dernier élément.

const minJumps = (nums) => {
  if (nums.length <= 1) return 0;

  let jumps = 0;
  let currentMax = 0;
  let nextMax = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    nextMax = Math.max(nextMax, i + nums[i]);

    if (i === currentMax) {
      jumps++;
      currentMax = nextMax;
    }

    if (currentMax >= nums.length - 1) {
      return jumps;
    }
  }

  return jumps;
};

console.log(minJumps([2, 3, 1, 1, 4]));
