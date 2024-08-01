var majorityElement = function (nums) {
  let obj = {};
  const arrLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  //   console.log(obj);
  //   console.log(Math.floor(arrLength / 2));

  console.log(Object.values(obj).map((key) => obj[key]));

  for (let key in obj) {
    if (obj[key] > Math.floor(arrLength / 2)) {
      return Number(key);
    }
  }

  //   return Object.values(obj).sort((a, b) => b - a)[0];
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
