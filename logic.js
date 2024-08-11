// Input: temperatures = [30, 25, 27, 28, 24, 31, 29]
// Output: 7
// Explanation: La plus grande différence positive est entre le jour 4 (température = 24) et le jour 5 (température = 31), ce qui donne une différence de 31 - 24 = 7.

// Input: temperatures = [30, 29, 27, 25, 20]
// Output: 0
// Explanation: Dans ce cas, il n'y a pas de jour où la température suivante est plus élevée que la précédente, donc la plus grande différence positive est 0.

const findDifference = (arr) => {
  let min = arr[0];
  let max = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] - min > max) {
      max = prices[i] - min;
    }
  }

  return max;
};
