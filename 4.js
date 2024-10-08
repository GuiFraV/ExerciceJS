const jumpGame = (nums) => {
  let minJump = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= minJump) {
      minJump = i;
    }
  }

  return minJump === 0;
};

const jumpGameII = (nums) => {
  let maxJump = 0;
  let currentMax = 0;
  let nextMax = 0;

  for (let i = 0; i < nums.length; i++) {
    nextMax = Math.max(nextMax, i + nums[i]);

    if (i === currentMax) {
      maxJump++;
      currentMax = nextMax;
    }

    if (currentMax >= nums.length - 1) {
      return jumps;
    }
  }

  return jumps;
};

const longest = (strs) => {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, strs.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

// console.log(longest(["flower", "flow", "flight"]));
// console.log(longest(["dog", "racecar", "car"]));

const jG = (nums) => {
  let minJump = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= minJump) {
      minJump = i;
    }
  }

  return minJump === 0;
};

// console.log(jG([2, 3, 1, 1, 4]));
// console.log(jG([3, 2, 1, 0, 4]));

const jGII = (nums) => {
  let minJump = 0;
  let currentMax = 0;
  let nextMax = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    nextMax = Math.max(nextMax, i + nums[i]);

    if (currentMax === i) {
      minJump++;
      currentMax = nextMax;
    }

    if (currentMax >= nums.length - 1) {
      return jumps;
    }
  }

  return minJump;
};

console.log(jGII([2, 3, 1, 1, 4]));
console.log(jGII([2, 3, 0, 1, 4]));
