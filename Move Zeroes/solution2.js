const problem1 = [0, 1, 0, 3, 12];
const problem2 = [0];
const problem3 = [10, 0, 2, 0, 4, -5];
const moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  // Swap non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap only when i is not equal to nonZeroIndex to avoid unnecessary swaps
      if (i !== nonZeroIndex) {
        [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      }
      nonZeroIndex++;
    }
  }

  return nums;
};

console.log(moveZeroes(problem1));
console.log(moveZeroes(problem2));
console.log(moveZeroes(problem3));
