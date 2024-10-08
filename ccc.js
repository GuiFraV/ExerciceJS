const longest = (strs) => {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

const jumpGameII = (nums) => {
  let currentMax = 0;
  let nextMax = 0;
  let minJump = 0;

  for (let i = 0; i < nums.length; i++) {
    nextMax = Math.max(i + nums[i], nextMax);

    if (i === currentMax) {
      minJump++;
      currentMax = nextMax;
    }

    if (currentMax >= nums.length - 1) {
      return jumps;
    }
  }
  return jumps;
};

const timeToSell = (prices) => {
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

// console.log(timeToSell([7, 1, 5, 3, 6, 4]));
// console.log(timeToSell([7, 6, 4, 3, 1]));

const lcp = (strs) => {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

console.log(lcp(["flower", "flow", "flight"]));
console.log(lcp(["dog", "racecar", "car"]));
