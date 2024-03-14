function calculateProduct(nums) {
  
    let res = [];

    //left to right
    let product = nums[1];
    for(let i = 0 ; i < nums.length; i++){
        product = product * nums[i]
        res = product;
    } 

    return res;
}

// console.log(calculateProduct([1, 2, 3, 4])); // Doit afficher 24


function calculateLeftAndRightProducts(nums) {
  let leftProducts = [];
  let rightProducts = [];
  let product = 1;

  // Left to right
  for (let i = 0; i < nums.length; i++) {
    leftProducts.push(product);
    product *= nums[i];
  }

  product = 1;
  // Right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    rightProducts.unshift(product);
    product *= nums[i];
  }

  return [leftProducts, rightProducts];
}

const [leftProducts, rightProducts] = calculateLeftAndRightProducts([1, 2, 3, 4]);
console.log(leftProducts); // Doit afficher [1, 1, 2, 6]
console.log(rightProducts); // Doit afficher [24, 12, 4, 1]