const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); 

const data = input.map(Number); 

let arr = [];
for(let i = 0; i<10; i++) {
    arr.push(data[i] % 42);
}

let setArr = new Set(arr);

console.log([...setArr].length);
