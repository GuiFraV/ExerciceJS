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

console.log(binary_search(arr, target));
