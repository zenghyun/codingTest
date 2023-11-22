function solution(sides) {
  let maxLength = Math.max(...sides);
  let minLength = Math.min(...sides);
  let alpha = maxLength - minLength + 1;
  let answer = 0;

  // maxLength가 세 변중 가장 클 경우
  while (maxLength >= alpha) {
    alpha++;
    answer++;
  }
  alpha = maxLength + 1;

  // alpha가 세 변중 가장 클 경우
  while (alpha < minLength + maxLength) {
    alpha++;
    answer++;
  }
  return answer;
}