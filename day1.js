const isValid = (s) => {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char in pairs) {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

const createList = (arr) => {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 0; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head;
};

const invertBianaryTree = (root) => {
  if (!root) return null;
  let tmp = root.left;
  root.left = invertBianaryTree(root.right);
  root.right = invertBianaryTree(tmp);
  return root;
};

const anagram = (s, t) => {
  let s2 = s.split("").sort();
  let t2 = t.split("").sort();

  if (s2.length !== t2.length) return false;

  for (let i = 0; i < s2.length; i++) {
    if (s2[i] !== t2[i]) {
      return false;
    }
  }

  return true;
};

console.log(anagram("anagram", "nagaram"));
