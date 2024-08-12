// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

const mergeArray = (arr1, arr2, m, n) => {
  let sliceArr1 = arr1.slice(0, m);
  let sliceArr2 = arr2.slice(0, n);

  return [...sliceArr1, ...sliceArr2].sort((a, b) => a - b);
};

console.log(mergeArray([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3));
console.log(mergeArray([1], [], 1, 0));
console.log(mergeArray([0], [1], 0, 1));
