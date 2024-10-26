const example1 = [1, 2, 3, 4];
const example2 = [-1, 1, 0, -3, 3];
const example3 = [1, 3, 6, 4];

var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);

  let product = 1;
  for (i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  return result;
};

console.log(productExceptSelf(example1));
console.log(productExceptSelf(example2));
console.log(productExceptSelf(example3));
