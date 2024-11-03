const example1 = [4, 3, 2, 7, 8, 2, 3, 1];
const example2 = [1, 1, 2];
const example3 = [1];

let findDuplicates = function (nums) {
  let duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      duplicates.push(Math.abs(nums[i]));
    } else {
      nums[index] = -nums[index];
    }
  }
  return duplicates;
};

console.log(findDuplicates(example1));
console.log(findDuplicates(example2));
console.log(findDuplicates(example3));
