const s = "A man, a plan, a canal: Panama";

const isPalindrome = (s) => {
  const replaceString = s
    .replace(/[.: ]/g, "")
    .split(",")
    .join("")
    .toLowerCase();

  let left = 0;
  let right = replaceString.length - 1;

  while (left < right) {
    if (replaceString[left] !== replaceString[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(isPalindrome(s));
