function solution(numbers) {
    var answers = numbers.sort((a,b) => a-b);
    var [num1, num2] = answers.splice(numbers.length-2);
    return num1 * num2;
}
