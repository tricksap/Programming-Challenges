const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const input2 = [""];
const input3 = ["a"];
const input4 = [
  "listen",
  "silent",
  "enlist",
  "inlets",
  "google",
  "goleog",
  "cat",
  "tac",
  "act",
];

function GroupAnagram(input) {
  let tempObj = {};
  for (text of input) {
    const sortedStr = sortString(text);
    if (tempObj.hasOwnProperty(sortedStr)) {
      tempObj[sortedStr].push(text);
    } else {
      tempObj[sortedStr] = [text];
    }
  }
  return Object.values(tempObj);
}

function sortString(str) {
  return str.split("").sort().join("");
}
console.log(GroupAnagram(input), "\n");
console.log(GroupAnagram(input2), "\n");
console.log(GroupAnagram(input3), "\n");
console.log(GroupAnagram(input4), "\n");
