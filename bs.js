const binarySearch = (arr, target) => {

    let low = 0;
    let high = arr.length -1;

    while(low <= high){

        let mid = Math.floor((low+high)/2);

        if(target === arr[mid]){
            return arr[mid];
        }

        if(target < arr[mid]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }

    }

    return "";

} 

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7))