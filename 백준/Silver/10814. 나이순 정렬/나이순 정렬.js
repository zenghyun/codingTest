let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

let arr = [];
for (let i = 1; i <= num; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}
arr.sort((a, b) => a[0] - b[0]);

let answer = "";
for(let x of arr) answer += x[0] + " " + x[1] + "\n";
console.log(answer);
