// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const sellBuyStock = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }

    if (minPrice < prices[i]) {
      let pot = prices[i] - minPrice;
      if (pot > maxProfit) {
        maxProfit = pot;
      }
    }
  }
  return maxProfit;
};

// console.log(sellBuyStock([7, 1, 5, 3, 6, 4]));
// console.log(sellBuyStock([7, 6, 4, 3, 1]));

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

const jumpGame = (nums) => {
  let maxJump = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= maxJump) {
      maxJump = i;
    }
  }

  return maxJump === 0;
};

// console.log(jumpGame([2, 3, 1, 1, 4]));
// console.log(jumpGame([3, 2, 1, 0, 4]));

// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

const jumpGame2 = (nums) => {
  let currentMax = 0;
  let jump = 0;
  let nextMax = 0;

  for (let i = 0; i < nums.length; i++) {
    nextMax = Math.max(nextMax, i + nums[i]);

    if (i === currentMax) {
      jump++;
      currentMax = nextMax;
    }

    if (currentMax >= nums.length - 1) {
      return jump;
    }
  }
  return jump;
};

// console.log(jumpGame2([2, 3, 1, 1, 4]));
// console.log(jumpGame2([2, 3, 1, 1, 4]));

const iso = (s, t) => {
  let objS = {};
  let objT = {};

  for (let i = 0; i < s.length; i++) {
    if (objS[s[i]] && objS[s[i]] !== t[i]) {
      return false;
    } else {
      objS[s[i]] = t[i];
    }

    if (objT[t[i]] && objT[t[i]] !== s[i]) {
      return false;
    } else {
      objT[t[i]] = s[i];
    }
  }
  return true;
};
// console.log(iso("egg", "add"));
