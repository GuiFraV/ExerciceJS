// const binarySearch = (arr, target) => {

//     let low = 0;
//     let high = arr.length -1;

//     while(low <= high){

//         let mid = Math.floor((low+high)/2);

//         if(target === arr[mid]){
//             return arr[mid];
//         }

//         if(target < arr[mid]){
//             high = mid - 1;
//         }else{
//             low = mid + 1;
//         }

//     }

//     return "";

// } 

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7))


// const tab = [
//     [5, 6, 1, 2, 3, 4],
//     [7, 8, 9, 1, 2, 3, 4, 5, 6],
//     [3, 4, 5, 6, 7, 8, 1, 2],
//     [1, 2, 3, 4, 5],
//     [4, 5, 6, 7, 0, 1, 2, 3],
//     [6, 7, 8, 9, 10, 2, 3, 4, 5],
// ]

// const rotateBinarySearch = (tab) => {
    
//     let low = 0;
//     let high = tab.length -1;
    
//     while(low <= high){
//         let mid = Math.floor((low + high) / 2 ); 
    
//         if(tab[low] === tab[mid]){
//             return mid
//         }

//         if(tab[low] > tab[mid]){ 

//             if(tab[high] > tab[mid]){

//                 high = mid;
//             }

//         }else{
            
//             if(tab[high] < tab[mid]){
//                 low = mid + 1;
//             }else{
//                 high = mid - 1;
//             }
//         }


//     }

//     return "ceci est le point final : " + 0;

// }


// for(let i = 0 ; i < tab.length; i++){

//     console.log("Cas de Test " + i + ":", rotateBinarySearch(tab[i]))
// }

const findElement = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  // Calculer la différence attendue en utilisant le premier et le dernier élément.
  // Cela fonctionne bien même avec un élément manquant car la différence totale
  // reste divisée par le nombre d'éléments réels moins un.
  const expectedDiff = (arr[high] - arr[low]) / (high - low);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Vérifier la différence entre l'élément à mid et l'élément juste avant lui.
    // Si la différence ne correspond pas à expectedDiff, l'élément manquant est à gauche.
    if (mid > 0 && arr[mid] - arr[mid - 1] != expectedDiff) {
      return arr[mid - 1] + expectedDiff;
    }
    // Si la différence entre l'élément à mid+1 et mid ne correspond pas,
    // l'élément manquant est juste après mid.
    if (mid < arr.length - 1 && arr[mid + 1] - arr[mid] != expectedDiff) {
      return arr[mid] + expectedDiff;
    }

    // Ajuster low et high en fonction du nombre d'éléments manquants
    // par rapport à l'index attendu. Cela détermine si l'élément manquant
    // est à gauche ou à droite de mid.
    if (arr[mid] - arr[low] != (mid - low) * expectedDiff) {
      // Si la différence à gauche de mid n'est pas comme attendu,
      // l'élément manquant est à gauche.
      high = mid - 1;
    } else {
      // Sinon, l'élément manquant est à droite.
      low = mid + 1;
    }
  }

  // Si l'élément manquant n'est pas trouvé, cela pourrait indiquer un problème
  // avec l'entrée ou une condition non gérée.
  return null;
}

console.log(findElement([1, 3, 5, 9, 11]));
