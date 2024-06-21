const arr = [1, 2, 3, 4, 5];
const target = 5;

const binary_search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] < target) {
      left = middle + 1;
    }

    if (arr[middle] > target) {
      right = middle - 1;
    }
  }

  return -1;
};

// console.log(binary_search(arr, target));

const arr1 = [1, 2, 2, 2, 3, 4, 5];
const target1 = 2;

const find_first_occurence = (arr1, target1) => {
  let left = 0;
  let right = arr1.length - 1;
  let result = -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr1[middle] === target1) {
      result = middle;
    }

    if (arr1[middle] < target1) {
      left = middle + 1;
    }

    if (arr1[middle] > target1) {
      right = middle - 1;
    }
  }

  return result;
};

console.log(find_first_occurence(arr1, target1));
