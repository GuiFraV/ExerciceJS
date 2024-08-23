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

// console.log(RomanToInteger("III"));
// console.log(RomanToInteger("LVIII"));
// console.log(RomanToInteger("MCMXCIV"));

const bestTimeToBuy = (prices) => {
  let minValue = prices[0];
  let maxValue = 0;

  for (let i = 1; i < prices.length; i++) {
    if (minValue > prices[i]) {
      minValue = prices[i];
    } else {
      let diff = prices[i] - minValue;

      if (diff > maxValue) {
        maxValue = diff;
      }
    }
  }
  return maxValue;
};

console.log(bestTimeToBuy([7, 1, 5, 3, 6, 4]));
console.log(bestTimeToBuy([7, 6, 4, 3, 1]));

const jumpGame = (nums) => {
  let goal = nums.length - 1;

  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

console.log(jumpGame([2, 3, 1, 1, 4]));
console.log(jumpGame([3, 2, 1, 0, 4]));
