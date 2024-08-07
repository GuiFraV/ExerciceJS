// Normalisation de chaînes de caractères :
// Écrivez une fonction qui prend une chaîne de caractères en entrée et la retourne en minuscules.

const lowerCase = (str) => {
  return str.toLowerCase();
};

// Écrivez une fonction qui prend une chaîne de caractères en entrée et la retourne en majuscules.

const uppercase = (str) => {
  return str.toUpperCase();
};
// Écrivez une fonction qui prend une chaîne de caractères en entrée et la retourne avec la première lettre en majuscule et le reste en minuscules.

const firstUpperCase = (str) => {
  return str.replace(str[0], str[0].toUpperCase());
};

// Manipulation de chaînes de caractères :
// Écrivez une fonction qui prend une chaîne de caractères en entrée et retourne le nombre de voyelles qu'elle contient.

const nbrVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];

  let countVowels = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === vowels[j]) {
        countVowels++;
      }
    }
  }

  return countVowels;
};

// Écrivez une fonction qui prend une chaîne de caractères en entrée et retourne la chaîne inversée.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// Écrivez une fonction qui prend une chaîne de caractères en entrée et retourne true si c'est un palindrome (se lit de la même manière de gauche à droite et de droite à gauche), sinon false.

const palindrome = (str) => {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

// Manipulation de tableaux :
// Écrivez une fonction qui prend un tableau de nombres en entrée et retourne la somme de tous les éléments.

const sumArray = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumArray([1, 2, 3]));
// Écrivez une fonction qui prend un tableau de nombres en entrée et retourne le plus grand nombre du tableau.

const maxNumber = (arr) => {
  let a = arr[0];
  arr.forEach((n) => {
    if (n > a) {
      a = n;
    }
  });
  return a;
};

// console.log(maxNumber([1, 2, 3, 5, 6, 1, 1000, 50, 20]));
// Écrivez une fonction qui prend un tableau de chaînes de caractères en entrée et retourne un nouveau tableau contenant uniquement les chaînes de plus de 5 caractères.

const max5Character = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      result.push(arr[i]);
    }
  }

  return result;
};

// console.log(max5Character(["hello", "kayak", "alakis", "guillaume", "do"]));

// Manipulation d'objets :
// Écrivez une fonction qui prend un objet en entrée et retourne le nombre de propriétés qu'il contient.

const nbrProps = (obj) => {
  let count = 0;
  for (let prop in obj) {
    count += 1;
  }
  return count;
};

// console.log(nbrProps({ 1: "2", 3: "4", 5: "6" }));

// Écrivez une fonction qui prend deux objets en entrée et retourne un nouvel objet contenant les propriétés des deux objets fusionnés.

const mergeObjt = (obj1, obj2) => {
  return (obj3 = { ...obj1, ...obj2 });
};

// console.log(mergeObjt({ a: "1" }, { b: "2" }));

// Écrivez une fonction qui prend un objet et un prix minimum en entrée, et retourne un nouvel objet contenant uniquement les propriétés dont la valeur est supérieure ou égale au prix minimum.

const findMinimumPrice = (obj, price) => {
  let result = {};

  for (let props in obj) {
    // console.log(obj[props]);
    if (obj[props] >= price) {
      result = obj[props];
    }
  }

  return result;
};

console.log(findMinimumPrice({ 1: 10, 2: 5, 3: 1 }, 5));

// Gestion des erreurs et des cas particuliers :
// Écrivez une fonction qui prend un nombre en entrée et retourne sa racine carrée. Gérez le cas où le nombre est négatif.

const racineCarre = (nbr) => {
  if (nbr > 0) {
    return Math.sqrt(nbr);
  }
};

// Écrivez une fonction qui prend une chaîne de caractères en entrée et retourne le nombre de mots qu'elle contient. Considérez différents séparateurs (espaces, tabulations, virgules, etc.).

const countWord = (str) => {
  let count = 0;
  str.split(" ").forEach((w) => {
    count += 1;
  });

  return count;
};

console.log(countWord("hello ça va ?"));

// Écrivez une fonction qui prend un tableau de nombres en entrée et retourne la moyenne des nombres. Gérez le cas où le tableau est vide.

const moyenne = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length - 1;
};

console.log(moyenne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
