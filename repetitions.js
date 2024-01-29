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

// console.log(fibo(1))
// console.log(fibo(2))
// console.log(fibo(3))
// console.log(fibo(4))
// console.log(fibo(5))
// console.log(fibo(6))
// console.log(fibo(7))
// console.log(fibo(8))
// console.log(fibo(9))

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

// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))
// console.log(fib(5))
// console.log(fib(6))
// console.log(fib(7))
// console.log(fib(8))
// console.log(fib(9))
// console.log(fib(10))


const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

const validateSubsequence = (arr, seq) => {

    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx !== arr.length && seqIdx !== seq.length){

        if(arr[arrIdx] !== seq[seqIdx]){
            seqIdx++;
        }else{
            arrIdx++;
        }
    }

    return seqIdx === seq.length;

}

console.log(validateSubsequence(array,sequence));

const tree = {
"nodes": [
    {"id": "10", "left": "5", "right": "15", "value": 10},
    {"id": "15", "left": "13", "right": "22", "value": 15},
    {"id": "22", "left": null, "right": null, "value": 22},
    {"id": "13", "left": null, "right": "14", "value": 13},
    {"id": "14", "left": null, "right": null, "value": 14},
    {"id": "5", "left": "2", "right": "5-2", "value": 5},
    {"id": "5-2", "left": null, "right": null, "value": 5},
    {"id": "2", "left": "1", "right": null, "value": 2},
    {"id": "1", "left": null, "right": null, "value": 1}
],
    "root": "10"
}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const target = 12

function buildTree(jsonTree) {
    const nodes = {};  
    jsonTree.nodes.forEach(nodeData => {
        nodes[nodeData.id] = new BST(nodeData.value);
    });
    jsonTree.nodes.forEach(nodeData => {
        if (nodeData.left) nodes[nodeData.id].left = nodes[nodeData.left];
        if (nodeData.right) nodes[nodeData.id].right = nodes[nodeData.right];
    });
    return nodes[jsonTree.root];
}

const bstRoot = buildTree(tree);

const findClosestValue = (tree, target) => {

    let closest = Infinity;
    let currentNode = tree;

    while(currentNode !== null){

        if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
            closest = currentNode.value;
        }
        if(target < currentNode.value){
            currentNode = currentNode.left;
        }else if(target > currentNode.value){
            currentNode = currentNode.right
        }else{
            break;
        }

    }

    return closest;

}

console.log(findClosestValue(bstRoot, 12))









