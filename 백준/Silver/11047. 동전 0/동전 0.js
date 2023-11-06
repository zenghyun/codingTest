const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [num, money] = input[0].split(" ").map(Number);
let cnt = 0;

for (let i = num; i > 0; i--) {
  if (money >= input[i]) {
    let num = Math.floor(money / input[i]);
    money = money - input[i] * num;
    cnt += num;
  }
  if (money === 0) {
    break;
  }
}
console.log(cnt);
