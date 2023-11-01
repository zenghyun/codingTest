let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [num1, num2] = input[0].split(" "); 

const reverse =  (num) => {
    return num.split("").reverse().join("");
};
let realNum1 = reverse(num1);
let realNum2 = reverse(num2);

realNum1 > realNum2 ? console.log(realNum1) : console.log(realNum2);