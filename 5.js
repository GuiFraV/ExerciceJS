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

console.log(bestTime([7, 1, 5, 3, 6, 4]));
console.log(bestTime([7, 6, 4, 3, 1]));
