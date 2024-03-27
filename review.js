// const mergeAlternately = (word1, word2) => {
//     let res = [];

//     // Determine the maximum length between word1 and word2
//     const maxLength = (word1.length >= word2.length) ? word1.length : word2.length;

//     // Traverse both words simultaneously
//     for (let i = 0; i < maxLength; i++) {
//         // Add the character from word1 to res if it exists
//         if (i < word1.length) {
//             res[i] = word1[i];
//         }
//         // Add the character from word2 to res if it exists
//         if (i < word2.length) {
//             res[i + word1.length] = word2[i];
//         }
//     }

//     // Return the result as a string
//     return res.join("");
// }


// const reverseVowels = (s) => {

//     const vowels = "aeiouAEIOU";
//     let arrString = s.split("");
//     let left = 0;
//     let right = arrString.length -1;

//     while(left < right){

//         while (left < right && !vowels.includes(arrString[left])) {
//             left++;
//         }

//         while (left < right && !vowels.includes(arrString[right])) {
//             right--;
//         }

//         if(left < right){

//             let temp = arrString[left];
//             arrString[left] = arrString[right];
//             arrString[right] = temp;

//             left++;
//             right--;

//         }

//     }

//     return arrString;

// }


// console.log(reverseVowels("hello"))
// console.log(reverseVowels("a.b,."))


// const n = 5;

// let result = 1;
// for (let i = 1; i <= n; i++) {
//     console.log(result)
//     result *= i;
// }
// console.log(result);


// Exercice 1 : Initialisation de la grille
// Objectif : Créer une fonction initGrid(n) qui initialise une grille carrée de taille n x n remplie de pixels blancs ('.').
// Instructions :
// La fonction doit prendre un paramètre n représentant la taille de la grille.
// Utilisez la méthode Array(n).fill() pour créer un tableau de n éléments.
// Utilisez la méthode map() pour transformer chaque élément en une ligne de n pixels blancs ('.').
// Utilisez la méthode split('') pour convertir chaque ligne en un tableau de caractères.
// La fonction doit retourner la grille initialisée.

function initGrid(n) {
  // Votre code ici
}

const grid = initGrid(3);
console.log(grid);
// Output :
// [
//   ['.', '.', '.'],
//   ['.', '.', '.'],
//   ['.', '.', '.']
// ]