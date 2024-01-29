const gcdOfStrings = (s, t) => {


    const isDivisible = (str1, str2) => {

        if(str1.length % str2.length !== 0){
            return false;
        }
        const repetition = str1.length / str2.length;
        return str2.repeat(repetition) === str1;
    }


    const [smaller, larger] = s.length < t.length ? [s, t] : [t, s];

    for(let i = smaller.length; i > 0; i--){
        const candidate = smaller.substring(0,i);
        if(isDivisible(smaller, candidate) && isDivisible(larger, candidate)){
            return candidate;
        }
    }

    return '';


}

const gcdOfStringsTest = (s, t) => {


    const isDivisbleTest = (str1, str2) =>{

        if(str1.length % str2.length !== 0){
            return false;
        }
        const repetion = str1.length / str2.length;
        return str2.repeat(repetion) === str1;

    }


    const [ smaller, larger] = s.length < t.length ? [s,t] : [t, s];

    for(let i = smaller.length; i > 0; i--){

        const candidate = smaller.substring(0, i);

        if(isDivisbleTest(smaller, candidate) && isDivisbleTest(larger, candidate)){
            return candidate;
        }



    }

    return '';


}


const gdc = (s, t) => {


    const isDivi = (str1, str2) => {

        if(str1.length % str2.length !== 0){
            return false;
        }
        const repetition = str1.length / str2.length;
        return str2.repeat(repetition) === str1;
    }

    const [smaller, larger] = s.length < t.length ? [s, t] : [t, s];

    for(let i = smaller.length; i > 0; i--){
        const candidate = smaller.substring(0, i);
        if(isDivi(smaller, candidate) && isDivi(larger, candidate)){
            return candidate;
        }
    }

    return '';

}



const gdcString = (s, t) => {


    const divi = (str1, str2) => {

        if(str1.length % str2.length !== 0){
            return false;
        }
        const repetion = str1.length / str2.length;
        return str2.repeat(repetion) === str1;
    }

    const [smaller, larger] = s.length < t.length ? [s, t] : [t, s];

    for(let i = smaller.length; i > 0; i++){

        const candidate = smaller.substring(0, i);
        if(divi(smaller, candidate) && divi(larger, candidate)){
            return candidate;
        }

    }

    return ""



}




const gdcOsS = (s, t) => {


    const div = (str1, str2) => {

        if(str1.length % str2.length !== 0){
            return false;
        }
        const repetition = str1.length / str2.length;
        return str2.repeat(repetition) === str1;
    }

    const [ smaller, larger ] = s.length < t.length ? [s, t] : [t, s]

    for(let i = smaller.length; i > 0; i--){

        const candidate = smaller.substring(0, i);
        if(div(smaller, candidate) && div(larger, candidate)){
            return candidate;
        }
    }

    return "";

}

console.log(gdcOsS("ABABAB", "ABAB")); // "AB"
console.log(gdcOsS("ABCDEF", "ABC")); // ""




const gOC = (t, s) => {


    const d = (str1, str2) => {

        if(str1.length % str2.length !== 0){
            return false;
        }
        const repetition = str1.length / str2.length
        return str2.repeat(repetition) === str1;
    }

    const [smaller, larger] = s.length < t.length ? [s, t] : [t, s];

    for(let i = smaller.length; i > 0; i--){
        const candidate = smaller.substring(0, i);
        if(d(smaller, candidate) && d(larger, candidate)){
            return candidate;
        }
    }

    return "";

}


console.log(gOC("ABABAB", "ABAB")); // "AB"
console.log(gOC("ABCDEF", "ABC")); // ""





const g = (t,s) => {

    const divide = (str1, str2) => {
        if(str1.length % str2.length !== 0){
            return false;
        }
        const repet = str1.length / str2.length
        return str2.repeat(repet) === str1;
    }

    const [smaller, larger] = s.length < t.length ? [s, t] : [t, s];

    for(let i = smaller.length; i > 0; i--){

        const candidate = smaller.substring(0, i);
        if(divide(smaller, candidate) && divide(larger, candidate)){
            return candidate;
        }
    }

    return "";

}

console.log(g("ABABAB", "ABAB")); // "AB"
console.log(g("ABCDEF", "ABC")); // ""



const fibo = (nbr) => {


    if(nbr < 2){
        return nbr;
    }

    return fibo(nbr - 1) + fibo(nbr - 2)


}

console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(4))
console.log(fibo(5))
console.log(fibo(6))
console.log(fibo(7))
console.log(fibo(8))
console.log(fibo(9))

const fib = (nbr) => {

    if(nbr < 2){
        return nbr;
    }

    let a = 0;
    let b = 1;

    for(let i = 0 ; i < nbr; i++){
        let res = a + b;
        a = b;
        b = res;
    }

    return b;
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))









