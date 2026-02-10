// 슬라이딩 윈도우
function solution(n, m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];

    if (sum === m) {
      answer++;
    }

    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) {
        answer++;
      }
    }
  }
  return answer;
}
console.log(solution(8, 6, [1, 2, 3, 1, 3, 1, 1, 1, 2]));
