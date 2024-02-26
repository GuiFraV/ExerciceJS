const mergeAlternately = (word1, word2) => {

    let res = [];

    if(word1.length > word2.length){
        
        for(let i = 0 ; i < word1.length; i++){
            res.push(word1[i]);
            res.push(word2[i]);
        }
    }else{
        for(let i = 0 ; i < word2.length; i++){
            res.push(word1[i]);
            res.push(word2[i]);
        }
    }

    return res.filter(el => { return el != undefined}).join("");

}

console.log(mergeAlternately("ab","pqrs"));
console.log(mergeAlternately("abcd","pq"));