const problem1 = [0, 1, 0, 3, 12];
const problem2 = [0];
const problem3 = [10, 0, 2, 0, 4, -5];
const moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  for (nonZeroIndex; nonZeroIndex < nums.length; nonZeroIndex++) {
    nums[nonZeroIndex] = 0;
  }
  return nums;
};

console.log(moveZeroes(problem1));
console.log(moveZeroes(problem2));
console.log(moveZeroes(problem3));
