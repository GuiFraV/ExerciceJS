function findBestSubArray(nums) {
  if (nums.length < 2) return nums[0];

  let obj = {};

  let first = nums[0];
  obj[first];
  let second = nums[1];
  obj[second];
  let third = nums[2];
  obj[third];

  let firstResult = first + second;
  obj[firstResult];

  let secondResult = second + third;
  obj[secondResult];

  let thirdResult = first + second + third;
  obj[thirdResult];

  return obj;
}

// console.log(findBestSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(findBestSubArray([-1, -2, -3]));
