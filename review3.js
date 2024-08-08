// Reverse string & integer

function reverseInput(input) {
  // Convertir l'entrée en chaîne de caractères
  let str = input.toString();
  // Inverser la chaîne de caractères
  let reversedStr = str.split("").reverse().join("");

  // Vérifier si l'entrée originale est un nombre
  if (typeof input === "number") {
    // Retourner le résultat comme un nombre
    return parseFloat(reversedStr);
  } else {
    // Retourner le résultat comme une chaîne de caractères
    return reversedStr;
  }
}
// console.log(reverseInput("hello")); // "olleh"
// console.log(reverseInput(12345)); // 54321
// console.log(reverseInput("12345")); // "54321"
// console.log(reverseInput(-12345)); // -54321

// Palindrome

const palindrome = (str) => {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

// console.log(palindrome("hello"));
// console.log(palindrome("kayak"));

// const maxChar = (str) => {
//   const charMap = {};
//   let max = 0;
//   let maxChar = "";

//   // Parcourir chaque caractère de la chaîne
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   // Trouver le caractère avec le nombre maximum d'occurrences
//   for (let key in charMap) {
//     if (charMap[key] > max) {
//       max = charMap[key];
//       maxChar = key;
//     }
//   }

//   return maxChar;
// };

const maxChar = (str) => {
  let obj = {};
  let max = 0;
  let maxChar = "";

  // Count occurences
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  //   console.log(obj);

  //Find occurences
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }

  return maxChar;
};

// Exemple d'utilisation
// console.log(maxChar("aabbbcccc")); // "c"
// console.log(maxChar("hello world")); // "l"
// console.log(maxChar("javascript")); // "a"

// Array Chunk
const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, size + index));
    index += size;
  }

  return chunked;
};
// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4, 5], 2));
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.log(chunk([1, 2, 3, 4, 5], 3));
// console.log(chunk([1, 2, 3, 4, 5], 10));

// Fibonacci

const fibo = (nbr) => {
  let a = 0;
  let b = 1;

  for (let i = 2; i <= nbr; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
};

// console.log(fibo(8));

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(19)); // true

// const reverseInput = (input) => {
//   let str = input.toString();

//   let strReverse = str.split("").reverse().join("");

//   if (typeof input === "number") {
//     return parseFloat(strReverse);
//   } else {
//     return strReverse;
//   }
// };

// const pal = (str) => {
//   let len = str.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// };

// const maxChar = (str) => {
//   let obj = {};

//   let max = 0;
//   let maxChar = "";

//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//       maxChar = key;
//     }
//   }

//   return maxChar;
// };

//   a b c
// 0 1 1 2 3 5 8 13 21

// const fib = (nbr) => {
//   let a = 0;
//   let b = 1;

//   for (let i = 0; i <= nbr; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }

//   return b;
// };

// const chunk = (array, size) => {
//   const chunked = [];

//   index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// };
