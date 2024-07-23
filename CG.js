/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

let bin = "";

for (let i = 0; i < MESSAGE.length; i++) {
  let charBin = MESSAGE[i].charCodeAt().toString(2);

  while (charBin.length < 7) {
    charBin = "0" + charBin;
  }

  bin += charBin;
}

let unaire = "";
let i = 0;

while (i < bin.length) {
  let currentChar = bin[i];
  let count = 0;

  while (i < bin.length && bin[i] === currentChar) {
    count++;
    i++;
  }

  if (currentChar === "1") {
    unaire += "0 " + "0".repeat(count) + " ";
  } else {
    unaire += "00 " + "0".repeat(count) + " ";
  }
}

console.log(unaire.trim());
