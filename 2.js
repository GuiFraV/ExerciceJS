// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = (prices) => {
  let minPrices = prices[0];
  let maxPrices = 0;

  for (let i = 1; i < prices.length; i++) {
    if (minPrices > prices[i]) {
      minPrices = prices[i];
    } else {
      let plueValue = prices[i] - minPrices;
      if (plueValue > maxPrices) {
        maxPrices = plueValue;
      }
    }
  }
  return maxPrices;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

const jumpGame = (nums) => {
  let minJump = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= minJump) {
      minJump = i;
    }
  }

  return minJump == 0;
};

// console.log(jumpGame([2, 3, 1, 1, 4]));
// console.log(jumpGame([3, 2, 1, 0, 4]));

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

const jumpGame2 = (nums) => {
  let nextMax = 0;
  let currentMax = 0;
  let jump = 0;

  for (let i = 0; i < nums.length; i++) {
    nextMax = Math.max(nextMax, nums[i] + i);

    if (i === currentMax) {
      jump++;
      currentMax = nextMax;
    }

    if (currentMax >= nums.length - 1) {
      return jumps;
    }
  }

  return jumps;
};
