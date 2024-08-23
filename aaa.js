const romanToInt = (s) => {
  const symbol = {
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
    if (symbol[s[i]] < symbol[s[i + 1]]) {
      result += symbol[s[i + 1]] - symbol[s[i]];
      i++;
    } else {
      result += symbol[s[i]];
    }
  }

  return result;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));

const jumpGameII = (nums) => {
  let currentMax = 0;
  let nextMax = 0;
  let jump = 0;

  for (let i = 0; i < nums.length; i++) {
    nextMax = Math.max(nextMax, i + nums[i]);

    if (i === currentMax) {
      currentMax = nextMax;
      jump++;
    }

    if (currentMax >= nums[nums.length - 1]) {
      return jump;
    }
  }

  return jump;
};

console.log(jumpGameII([2, 3, 1, 1, 4]));
console.log(jumpGameII([2, 3, 0, 1, 4]));
