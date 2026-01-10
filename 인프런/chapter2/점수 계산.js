function solution(lists) {
  let answer = 0,
    cnt = 0;

  for (let x of lists) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }

  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 1, 0, 1, 1, 0]));
