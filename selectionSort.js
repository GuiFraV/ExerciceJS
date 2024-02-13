const findTheMin = (arr) => {
    let smallest = arr[0];
    let smallest_index = 0;

    for(let i = 0 ; i < arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i];
            smallest_index = i;
        }
    }

    return smallest_index;
}

// console.log(findTheMin([5, 3, 6, 2, 10]))

const selectionSort = (arr) => {
    let newArr = [];
    const length = arr.length
    for(let i = 0 ; i < length; i++){
        let smallest_index = findTheMin(arr)
        newArr.push(...arr.splice(smallest_index, 1))
    }
    return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]))