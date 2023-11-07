const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = parseInt(input[0], 10);

let arr = 0;
let cnt;
for (let i = 1; i <= num; i++) {
  arr += i;
  if (arr > num) {
    cnt = i;
    break;
  } else if (arr === num) {
    cnt = i + 1;
    break;
  }
}

console.log(cnt - 1);
