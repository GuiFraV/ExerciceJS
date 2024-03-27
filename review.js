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


function initGrid(n) {
    return Array(n).fill(".").map(() => Array(n).fill('.'));
}

// const grid = initGrid(5);
// // console.log(grid);
// // Output :
// // [
// //   ['.', '.', '.'],
// //   ['.', '.', '.'],
// //   ['.', '.', '.']
// // ]

// Exercice 2 : Remplissage d'une colonne
// Objectif : Créer une fonction fillColumn(grid, col) qui remplit une colonne de la grille avec des pixels noirs ('#').
// Instructions :
// La fonction doit prendre deux paramètres : grid (la grille) et col (l'index de la colonne à remplir).
// Parcourez chaque ligne de la grille à l'aide d'une boucle for...of.
// Pour chaque ligne, remplacez le pixel à l'index col par '#'.

function fillColumn(grid, col) {
  
    for(g of grid){
        g.splice(col, 1, "#")
    }
}

const grid = [
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
];
fillColumn(grid, 1);
console.log(grid);
// Output :
// [
//   ['.', '#', '.'],
//   ['.', '#', '.'],
//   ['.', '#', '.']
// ]
