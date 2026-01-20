function solution(text) {
  let answer = Number(text.toLowerCase().replace(/[a-z]/g, ""));
  return answer;
}

console.log(solution("g0en2T0s8eSoft"));
