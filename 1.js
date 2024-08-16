const isIsomorphique = (s, t) => {
  let objS = {};
  let objT = {};

  for (let i = 0; i < s.length; i++) {
    if (objS[s[i]] && objS[s[i]] !== t[i]) return false;
    objS[s[i]] = t[i];
    if (objT[t[i]] && objT[t[i]] !== s[i]) return false;
    objT[t[i]] = s[i];
  }
  return true;
};

// console.log(isIsomorphique("egg", "add"));

const jumpGameII = (nums) => {
  let currentMax = 0;
  let minJump = 0;
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

console.log(jumpGameII([2, 3, 1, 1, 4]));
