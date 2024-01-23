const mergeAlternately = (word1, word2) => {

    let res = [];
    let idx1 = 0;
    let idx2 = 0;

    let count = 0;

    while(word1.length !== idx1 || word2.length !== idx2){

        if(word1[idx1] !== undefined){
            res.push(word1[idx1]);
            idx1++;
        } 
        if(word2[idx2] !== undefined){
            res.push(word2[idx2]);
            idx2++;
        } 

        count++

    }


    console.log(count)
    console.log(word1.length, word2.length)
    console.log(res.toString().replaceAll(",", ""))

}

console.log(mergeAlternately("abc", "pqr"))