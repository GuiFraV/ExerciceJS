// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const sellAndBuyStock = (prices) => {
  let minPrices = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrices) {
      minPrices = prices[i];
    } else {
      let temp = prices[i] - minPrices;

      if (temp > maxProfit) {
        maxProfit = temp;
      }
    }
  }

  return maxProfit;
};

console.log(sellAndBuyStock([7, 1, 5, 3, 6, 4]));
console.log(sellAndBuyStock([7, 6, 4, 3, 1]));

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

const sellAndBuyStock2 = (prices) => {
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      totalProfit += prices[i + 1] - prices[i];
    }
  }

  return totalProfit;
};

console.log(sellAndBuyStock2([7, 1, 5, 3, 6, 4]));
console.log(sellAndBuyStock2([1, 2, 3, 4, 5]));
console.log(sellAndBuyStock2([7, 6, 4, 3, 1]));
