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
























