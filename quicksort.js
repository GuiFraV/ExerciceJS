const insertionSort = (array) => {
  if (array.length < 1) {
    return array;
  }

  let pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return insertionSort(left).concat(pivot, insertionSort(right));
};

// console.log(insertionSort([])); // Attendu: []

// console.log(insertionSort([5])); // Attendu: [5]
// console.log(insertionSort([1, 2, 3, 4, 5])); // Attendu: [1, 2, 3, 4, 5]
// console.log(insertionSort([5, 4, 3, 2, 1])); // Attendu: [1, 2, 3, 4, 5]
// console.log(insertionSort([4, 2, 5, 2, 3])); // Attendu: [2, 2, 3, 4, 5]
// console.log(insertionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // Attendu: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

[5, 4, 3, 2, 1];

// current = 4
// j = 0

// (0 >= 0 && 5 > 4):
// 4 = 5
// j = -1

// (-1 >= 0 && 5 > 4):

// 5 = 4

function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const numbers = [5, 2, 9, 1, 7, 6, 3, 8, 4];
const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers);
