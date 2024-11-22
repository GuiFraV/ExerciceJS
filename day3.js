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
