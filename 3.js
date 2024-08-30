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

// console.log(RomanToInt("III"));
// console.log(RomanToInt("LVIII"));
// console.log(RomanToInt("MCMXCIV"));

const lcprefix = (strs) => {
  let firstWord = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(firstWord) !== 0) {
      firstWord = firstWord.substring(0, strs.length - 1);
      if (firstWord === "") return "";
    }
  }
  return firstWord;
};

console.log(lcprefix(["flower", "flow", "flight"]));
console.log(lcprefix(["dog", "racecar", "car"]));
