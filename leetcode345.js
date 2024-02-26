function reverseVowels(s) {
    const vowels = 'aeiouAEIOU';
    let strArray = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer towards the center until a vowel is found
        while (left < right && !vowels.includes(strArray[left])) {
            left++;
        }
        // Move right pointer towards the center until a vowel is found
        while (left < right && !vowels.includes(strArray[right])) {
            right--;
        }
        // Swap the vowels
        if (left < right) {
            let temp = strArray[left];
            strArray[left] = strArray[right];
            strArray[right] = temp;

            // Move pointers towards the center
            left++;
            right--;
        }
    }

    // Join the array back into a string
    return strArray.join('');
}

// Example usage
console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
