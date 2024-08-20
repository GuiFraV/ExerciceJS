const romanInteger = (s) => {
  const RomanDictionnary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // console.log(RomanDictionnary[s[i + 1]]);
    if (RomanDictionnary[s[i]] < RomanDictionnary[s[i + 1]]) {
      result += RomanDictionnary[s[i + 1]] - RomanDictionnary[s[i]];
      i++;
    } else {
      result += RomanDictionnary[s[i]];
    }
  }

  return result;
};

console.log(romanInteger("III"));
console.log(romanInteger("LVIII"));
console.log(romanInteger("MCMXCIV"));
