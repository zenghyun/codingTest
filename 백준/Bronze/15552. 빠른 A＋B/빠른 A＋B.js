const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const data = Number(input[0]);

let answer = "";
for (let i = 1; i <= data; i++) {
  let data = input[i].split(" ");
    let a = Number(data[0]);
    let b = Number(data[1]);
  answer += a + b + "\n";
}
console.log(answer);