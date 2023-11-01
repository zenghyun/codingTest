let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input[0].split('');
let arr = [...num].sort((a,b) => b-a).join('');
console.log(arr);
