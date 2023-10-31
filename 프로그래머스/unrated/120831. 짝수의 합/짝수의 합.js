function solution(n) {
  var answer = Array.from({ length: n }, (undefined, j) => j + 1)
    .filter((v) => v % 2 === 0)
    .reduce((pre, cur) => pre + cur, 0);

  return answer;
}
console.log(solution(10));
