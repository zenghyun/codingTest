function solution(numbers) {
    var answer = numbers.reduce((pre,cur) => pre + cur, 0) / numbers.length;
    return answer.toFixed(1);
}