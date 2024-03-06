// // const canPlaceFlowers = (flowerbed, n) => {

// //     let arr = []

// //     for(let i = 0 ; i < flowerbed.length; i++){

// //         if(flowerbed[i] === 1){
// //             arr.push(true);
// //         }else{
// //             arr.push(false);
// //         }
// //     }

// //     for(let i = 0 ; i < arr.length; i++){

// //         if(arr[i-1] !== undefined && arr[i-1] === false && arr[i] === true && arr[i+1] === false && arr[i+1] !== undefined){
// //             return true;
// //         }

// //     }

// //     return false;
// // }

// // console.log(canPlaceFlowers([1,0,0,0,1], 1))



// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 
const canPlaceFlowers = (flowerbed, n) => {

    //  Si n = 1, je dois vérifier si peux planter une fleur
    //  Si n = 2 je dois vérifier si je peux planter deux fleurs

    let count = 0;

    // COMBIEN JE PEUX PLANTER DE FLEURS MAX ?
    for(let i = 0 ; i < flowerbed.length; i++){
        
        // Pour vérifier si je peux planter une fleur, règle du no-adjacent-flowers
        if(flowerbed[i] === 0){
            if(flowerbed[i + 1] === 0){
                if(flowerbed[i + 2] === 0){
                    count++;
                }
            }
        }

        if(flowerbed[0] === 0){
            if(flowerbed[0 + 1] === 0){
                count++;
            }
        }

        if(flowerbed[flowerbed.length -1] === 0){
            if(flowerbed[flowerbed.length -2] === 0){
                count++;
            }
        }

    }

    return count === n;


}

// console.log(canPlaceFlowers([1,0,0,0,1], 1)) //true
// console.log(canPlaceFlowers([1,0,0,0,1], 2)) //false
// console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) //false


const canPlaceFlowers1 = (flowerbed, n) => {

    let plantFlowerBed = [];
    let count = 0;

    for(let i = 0; i < flowerbed.length; i++){
        plantFlowerBed.push(flowerbed[i])
    }

    for(let i = 0 ; i < plantFlowerBed.length; i++){

        if(plantFlowerBed.length < 2 && plantFlowerBed[0] === 0){
            plantFlowerBed[0] = 1;
            count++;
        }

        if(plantFlowerBed.length >= 2 && plantFlowerBed[0] === 0){
            if(plantFlowerBed[1] === 0){
                plantFlowerBed[0] = 1;
                count++;
            }
        }

        if(plantFlowerBed.length >= 2 && plantFlowerBed[plantFlowerBed.length -1] === 0){
            if(plantFlowerBed[plantFlowerBed.length -2] === 0){
                plantFlowerBed[plantFlowerBed.length -1] = 1;
                count++;
            }
        }

        if(plantFlowerBed.length >= 2 && plantFlowerBed[i] === 0){
            if(plantFlowerBed[i + 1] === 0){
                if(plantFlowerBed[i + 2] === 0){
                    plantFlowerBed[i + 1] = 1;
                    count++;
                }
            }
        }

    }

    console.log(plantFlowerBed)
    console.log(plantFlowerBed.length)

    return count === n || count > n;

    // return plantFlowerBed;



}

console.log(canPlaceFlowers1([1,0,0,0,1], 1)) //true
console.log(canPlaceFlowers1([1,0,0,0,1], 2)) //false
console.log(canPlaceFlowers1([1,0,0,0,0,1], 2)) //false
console.log(canPlaceFlowers1([0], 1)) //true
console.log(canPlaceFlowers1([0,0,1,0,0], 1)) //true
console.log(canPlaceFlowers1([0,0], 1)) //true
console.log(canPlaceFlowers1([0,1], 1)) //false


