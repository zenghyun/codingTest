let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);

let list = input[1].split("").map(Number);
let sum  = 0;
for(var i = 0; i < num; i++) {
    sum += list[i];
}

console.log(sum);

