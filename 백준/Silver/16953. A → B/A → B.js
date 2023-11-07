const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [s, num] = input[0].split(" ").map(Number);

let flag = false;
let result = 1;

while (s <= num) {
  if (s === num) {
    flag = true;
    break;
  }
  if (num % 2 === 0) num = parseInt(num / 2);
  else if (num % 10 === 1) num = parseInt(num / 10);
  else break;
  result++;
}
if (flag) console.log(result);
else console.log(-1);
