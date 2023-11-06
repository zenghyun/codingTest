const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
  
let sum = 0;
for (let i = 1; i <= a.length; i++) {
  sum += a.slice(0, i).reduce((pre, cur) => pre + cur, 0);
}

console.log(sum);
