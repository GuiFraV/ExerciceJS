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


const tab = [
    [5, 6, 1, 2, 3, 4],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7, 8, 1, 2],
    [1, 2, 3, 4, 5],
    [4, 5, 6, 7, 0, 1, 2, 3],
    [6, 7, 8, 9, 10, 2, 3, 4, 5],
]

const rotateBinarySearch = (tab) => {
    
    let low = 0;
    let high = tab.length -1;
    
    while(low <= high){
        let mid = Math.floor((low + high) / 2 ); 
    
        if(tab[low] === tab[mid]){
            return mid
        }

        if(tab[low] > tab[mid]){ 

            if(tab[high] > tab[mid]){

                high = mid;
            }

        }else{
            
            if(tab[high] < tab[mid]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }


    }

    return "ceci est le point final : " + 0;

}


for(let i = 0 ; i < tab.length; i++){

    console.log("Cas de Test " + i + ":", rotateBinarySearch(tab[i]))
}