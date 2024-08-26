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

console.log(timeToBuy([7, 1, 5, 3, 6, 4]));
console.log(timeToBuy([7, 6, 4, 3, 1]));
