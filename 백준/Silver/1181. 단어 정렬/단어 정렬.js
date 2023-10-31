let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input[0]; 
let arr = [];
for(let i = 1; i <= num; i++) {
    arr.push(input[i]);
}

arr = [...new Set(arr)]; 

arr.sort().sort((a,b) => a.length - b.length); 

for(let x of arr) {
    console.log(x);
}

