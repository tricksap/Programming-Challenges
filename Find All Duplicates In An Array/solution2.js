const example1 = [4, 3, 2, 7, 8, 2, 3, 1];
const example2 = [1, 1, 2];
const example3 = [1];

let findDuplicates = function (nums) {
  let elems = {};
  let dupElem = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] in elems) {
      dupElem.push(nums[i]);
    } else {
      elems[nums[i]] = i;
    }
  }
  return dupElem;
};

console.log(findDuplicates(example1));
console.log(findDuplicates(example2));
console.log(findDuplicates(example3));
