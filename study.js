const timeToBuy = (prices) => {
  let minPrices = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (minPrices > prices[i]) {
      minPrices = prices[i];
    } else {
      let diff = prices[i] - minPrices;
      if (diff > maxProfit) {
        maxProfit = diff;
      }
    }
  }

  return maxProfit;
};

// console.log(timeToBuy([7, 1, 5, 3, 6, 4]));
// console.log(timeToBuy([7, 6, 4, 3, 1]));

const jumpGame = (nums) => {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

// console.log(jumpGame([2, 3, 1, 1, 4]));
// console.log(jumpGame([3, 2, 1, 0, 4]));
