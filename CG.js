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

print(
  // Lire le texte à convertir
  readline()
    // Convertir le texte en un tableau de caractères
    .split("")
    // Convertir chaque caractère en sa représentation binaire sur 7 bits
    .map((c) => ("0000000" + c.charCodeAt(0).toString(2)).substr(-7))
    // Joindre toutes les représentations binaires en une seule chaîne
    .join("")
    // Diviser la chaîne binaire en segments de 1 et de 0
    .match(/(1+|0+)/g)
    // Convertir chaque segment en encodage Chuck Norris
    .map((c) => (c[0] === "1" ? "0 " : "00 ") + "0".repeat(c.length))
    // Joindre tous les segments encodés avec des espaces
    .join(" ")
);
