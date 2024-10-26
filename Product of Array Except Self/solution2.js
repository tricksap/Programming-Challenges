const example1 = [1, 2, 3, 4];
const example2 = [-1, 1, 0, -3, 3];
const example3 = [1, 3, 6, 4];

var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length);
  for (i = 0; i < length; i++) {
    let product = 1;
    for (j = 0; j < length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result[i] = product;
  }
  return result;
};

console.log(productExceptSelf(example1));
console.log(productExceptSelf(example2));
console.log(productExceptSelf(example3));
