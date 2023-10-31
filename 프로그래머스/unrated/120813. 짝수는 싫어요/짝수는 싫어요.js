function solution(n) {
  var answer = Array.from({ length: n }, (_, j) => j + 1).filter(
    (v) => v % 2 !== 0
  );
  return answer;
}