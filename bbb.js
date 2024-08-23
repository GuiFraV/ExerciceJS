const RomanToInteger = (symbol) => {
  const symbolValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < symbol.length; i++) {
    if (symbolValue[symbol[i]] < symbolValue[symbol[i + 1]]) {
      result += symbolValue[symbol[i + 1]] - symbolValue[symbol[i]];
      i++;
    } else {
      result += symbolValue[symbol[i]];
    }
  }

  return result;
};

console.log(RomanToInteger("III"));
console.log(RomanToInteger("LVIII"));
console.log(RomanToInteger("MCMXCIV"));
