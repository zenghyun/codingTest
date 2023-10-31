let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input[0]; 
let arr = [];
for(let i = 1; i <= num; i++) {
    arr.push(input[i]);
}

arr = [...new Set(arr)]; 

arr.sort((a,b) => {
    if(a.length !== b.length) {
        return a.length - b.length
    } else {
        if (a<b) {
            return -1;
        } else if (a >b) {
            return 1;
        } else {
            return 0;
        }
    }
})

for(let x of arr) {
    console.log(x);
}