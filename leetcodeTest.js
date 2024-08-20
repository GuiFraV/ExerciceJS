// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (s) {
//   const romanInteger = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;
//   let prevValue = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     let currentValue = romanInteger[s[i]];

//     if (currentValue >= prevValue) {
//       result += currentValue;
//     } else {
//       result -= currentValue;
//     }

//     prevValue = currentValue;
//   }

//   return Math.abs(result);
// };

var romanToInt = function (s) {
  const ROMAN_SYMBOL_AND_VALUE = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let realValue = 0;

  for (let i = 0; i < s.length; i++) {
    let currentValue = ROMAN_SYMBOL_AND_VALUE[s[i]];
    let nextValue = ROMAN_SYMBOL_AND_VALUE[s[i + 1]] || 0;

    realValue += nextValue > currentValue ? -currentValue : currentValue;
  }
  return realValue;
};

console.log(romanToInt("III")); // Devrait afficher 3
console.log(romanToInt("LVIII")); // Devrait afficher 58
console.log(romanToInt("MCMXCIV")); // Devrait afficher 1994
