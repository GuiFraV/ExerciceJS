const gcdOfStrings = (str1, str2) => {

    let res = "";
    let i = 0;

    while(i < str1.length && i < str2.length){

        // Check if char of str1 is equal to har of str2
        if(str1[i] === str2[i]){

            // Check if a char is already in the res string
            if(!res.includes(str1[i])){
                res += str1[i]
            }
            i++

        }else{
            break;
        }

    }
  
    return res;
}

console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "ABAB"))
console.log(gcdOfStrings("LEET", "CODE"))