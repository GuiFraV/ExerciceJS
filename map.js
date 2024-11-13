const first = (nums) => {
  let map = new Map();

  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return nums[i];
    }

    map.set(nums[i], i);
  }

  console.log(map);
  return result;
};

console.log(first([2, 1, 3, 5, 3, 2]));
console.log(first([1, 2, 3, 4]));
console.log(first([1, 1]));
