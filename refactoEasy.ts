// JavaScript code
// function add(a, b) {
//   return a + b;
// }

// const num1 = 5;
// const num2 = 10;

// const result = add(num1, num2);
// console.log("Result:", result);

// function add(a: number, b: number): number {
//   return a + b;
// }

// const num1: number = 5;
// const num2: number = 10;

// const result: number = add(num1, num2);

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArray: number[] = [];
  let i = 0;
  let j = 0;

  // Comparer les éléments des deux tableaux et les ajouter dans le tableau fusionné
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Ajouter les éléments restants de arr1, s'il y en a
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Ajouter les éléments restants de arr2, s'il y en a
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Exemple d'utilisation
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const result = mergeSortedArrays(arr1, arr2);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]
