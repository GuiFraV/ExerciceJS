const canPlaceFlowers = (flowerbed, n) => {

    let arr = []

    for(let i = 0 ; i < flowerbed.length; i++){

        if(flowerbed[i] === 1){
            arr.push(true);
        }else{
            arr.push(false);
        }
    }

    for(let i = 0 ; i < arr.length; i++){

        if(arr[i-1] !== undefined && arr[i-1] === false && arr[i] === true && arr[i+1] === false && arr[i+1] !== undefined){
            return true;
        }

    }

    return false;
}

console.log(canPlaceFlowers([1,0,0,0,1], 1))