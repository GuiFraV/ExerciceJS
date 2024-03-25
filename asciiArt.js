/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline()); // 20
const H = parseInt(readline()); // 11
const T = readline();
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let findIndex = [];
let asciiBuilder = [];
let res = [];
let output = "";




// FIND INDEXES :
for(let i = 0 ; i < [...T].length; i++){
    for(let j = 0; j < alphabet.length; j++){
        if(alphabet[j] === T[i].toUpperCase()){
            findIndex.push(j);
        }
        if(T[i].toUpperCase() === "@" || T[i].toUpperCase() === " "){
            findIndex.push(26);
            break;
        }
    }
}

// ASCII BUILDER :
for (let i = 0; i < H; i++) {
    const ROW = readline();
    asciiBuilder.push(ROW);
}

// LETTER FROM ASCII :
for(let i = 0; i < findIndex.length; i++){
    for(let j = 0; j < H; j++){
        res.push(asciiBuilder[j][(findIndex[i] * L)] + asciiBuilder[j][(findIndex[i] * L) + 1] + asciiBuilder[j][(findIndex[i] * L) + 2] + asciiBuilder[j][(findIndex[i] * L)+ 3]);
    }
}

console.log(findIndex)
console.log(asciiBuilder)
console.log(res)
console.log(output)

// OUTPUT BUILDER :
for (let i = 0; i < H; i++) {
  for (let j = 0; j < res.length; j += H) {
    output += res[j + i];
  }
  output += "\n";
}
console.log(output);