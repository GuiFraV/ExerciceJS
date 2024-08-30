const RomanToInt = (s) => {
  const Symbol = {
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
    if (Symbol[s[i]] < Symbol[s[i + 1]]) {
      result += Symbol[s[i + 1]] - Symbol[s[i]];
      i++;
    } else {
      result += Symbol[s[i]];
    }
  }

  return result;
};

console.log(RomanToInt("III"));
console.log(RomanToInt("LVIII"));
console.log(RomanToInt("MCMXCIV"));
