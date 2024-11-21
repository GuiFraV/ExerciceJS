const valideParenthese = (s) => {
  let stack = [];
  const parentheses = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (parentheses[char]) {
      if (stack.length === 0 || stack.pop() !== parentheses[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;

  //   1. verifier le symbol d'ouverture
  //   1.1 par exemple si le 1er symbol est ( alors le prochain symbol est soit ), soit, [ soit {, soit (
  //   1.2 sion return false
  //   1.3 si le prochain symbol est par exemple [ alors je dois chercher soit ], soit (, soit {,soit [
  // 1.4 le pattern est le suivant : Après le 1er symbol => ne pas trouver de symbol de fermeture différents du 1er symbol sinon false
  // mais je peux trouver n'importe quel symbol d'autre type

  // 2. Si je trouve le bon symbol par exemple () alors je le retire de s
  // 2.1 Imaginons par exemple s = ([{}])
  // 2.2 Je trouve le 1er symbol ( que j'enlève de s et que je place dans stack par exemple
  // 2.3 s = ([{}]) et stack = (
  // 2.4 Si true = s[1] = ) || [ || { || ( : comme s[1] = [ je compare stack avec s[1] ça ne se ferme pas stack = s[1]
  // 2.4.1 stack = [ alors s[2] = ] || { || ( || [ et stack = [
  // 2.4.2 s[2] = { alors s[3] = } || [ || ( || { et stack = {
  // 2.4.3 s[4] = } et que stack = { alors on le retire de s ce qui donne s = ([])
  // On recommence la boucle si à la fin s = 0 alors true
};

// console.log(valideParenthese("([])"));

const floodFill = (image, sr, sc, color) => {
  const a = image[sr][sc];

  if (a === color) return image;

  const fill = (x, y) => {
    if (
      x < 0 ||
      x >= image.length ||
      y < 0 ||
      y > image[0].length ||
      image[x][y] !== a
    ) {
      return;
    }

    image[x][y] = color;

    fill(x + 1, y);
    fill(x - 1, y);
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

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

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

// console.log(createList([1, 2, 3, 5, 6, 8]));

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const invertTree = (root) => {
  if (!root) return null;
  let tmp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmp);
  return root;
};
