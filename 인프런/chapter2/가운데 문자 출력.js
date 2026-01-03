function solution(text) {
  let isEven = text.length % 2 === 0;
  let half = text.length / 2;
  let answer = isEven
    ? text.substring(half - 1, half + 1)
    : text.substring(half, half + 1);

  return answer;
}

console.log(solution("study"));
