function solution(lists) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = 0,
    sum2 = 0;
  let n = lists.length;

  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += lists[i][j];
      sum2 += lists[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += lists[i][i];
    sum2 += lists[i][n - i - 1];
  }

  answer = Math.max(answer, sum1, sum2);

  return answer;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
