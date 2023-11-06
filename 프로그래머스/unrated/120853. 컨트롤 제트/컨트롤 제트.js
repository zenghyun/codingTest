function solution(s) {
  let answer = s.split(" ");
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "Z") {
      answer[i] = -answer[i - 1];
    }
  }
  return answer.reduce((pre, cur) => pre + parseInt(cur, 10), 0);
}