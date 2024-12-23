const validParentheses = (s) => {
  let stack = [];

  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (brackets[char]) {
      if (stack.length === 0 || stack.pop() !== brackets[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

// console.log(validParentheses("()"));
// console.log(validParentheses("()[]{}"));
// console.log(validParentheses("(]"));
// console.log(validParentheses("({[]})"));

class ListNode {
  constructor(value = 0, next) {
    this.value = value;
    this.next = next;
  }
}

const createListNode = (arr) => {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 0; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head;
};

class binaryTree {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const invertBinaryTree = (root) => {
  if (!root) return null;

  let temp = root.left;
  root.right = invertBinaryTree(root.right);
  root.left = temp;
  return root;
};

const BianrySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target > mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(BianrySearch([-1, 0, 3, 5, 9, 12], 9));

const floodFill = (image, sr, sc, color) => {
  const startingPoint = image[sr][sc];

  if (startingPoint === color) return image;

  const fill = (x, y) => {
    if (
      x < 0 ||
      x >= image.length ||
      y < 0 ||
      y > image[0].length ||
      image[x][y] !== startingPoint
    ) {
      return false;
    }

    image[x][y] = color;

    fill(x - 1, y);
    fill(x + 1, y);
    fill(x, y + 1);
    fill(x, y - 1);
  };

  fill(sr, sc);
  return image;
};

// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );

const invertBTree = (root) => {
  if (!root) return null;

  let tmp = root.left;

  root.left = invertBTree(root.right);
  root.right = invertBTree(tmp);

  return root;
};

console.log(invertBTree([4, 2, 7, 1, 3, 6, 9]));
