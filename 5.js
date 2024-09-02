const bestTime = (prices) => {
  let minPrices = prices[0];
  let maxValue = 0;

  for (let i = 1; i < prices.length; i++) {
    if (minPrices > prices[i]) {
      minPrices = prices[i];
    } else {
      let diff = prices[i] - minPrices;

      if (diff > maxValue) {
        maxValue = diff;
      }
    }
  }

  return maxValue;
};

// console.log(bestTime([7, 1, 5, 3, 6, 4]));
// console.log(bestTime([7, 6, 4, 3, 1]));

const jGII = (nums) => {
  let minJump = 0;
  let currentMax = 0;
  let nextMax = 0;

  for (let i = 0; i < nums.length; i++) {
    nextMax = Math.max(nextMax, i + nums[i]);

    if (i === currentMax) {
      minJump++;
      currentMax = nextMax;
    }

    if (currentMax >= nums.length - 1) {
      return minJump;
    }
  }

  return minJump;
};

// console.log(jGII([2, 3, 1, 1, 4]));
// console.log(jGII([2, 3, 0, 1, 4]));
