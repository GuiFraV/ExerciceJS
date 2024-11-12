const BestPairSum = (nums, k) => {
  let result = [];

  // On utilise deux boucles pour comparer chaque paire possible
  for (let i = 0; i < nums.length; i++) {
    // On commence j à i + 1 pour éviter les doublons et l'utilisation du même index
    for (let j = i + 1; j < nums.length; j++) {
      // Si la somme est supérieure ou égale à k
      if (nums[i] + nums[j] > k) {
        // On ajoute les indices (pas les valeurs) au résultat
        result.push([i, j]);
      }
    }
  }

  return result;
};

// Tests
console.log(BestPairSum([1, 4, 3, 6, 8], 9)); // [[3,4]]
console.log(BestPairSum([2, 3, 4, 5], 6)); // [[1,3], [2,3]]
