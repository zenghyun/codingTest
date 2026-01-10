function solution(lists) {
  let answer = 0;
  let n = lists.length;

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let current = lists[i][j];
      let isPeak = true;
      for (let k = 0; k < 4; k++) {
        let ni = i + dx[k];
        let nj = j + dy[k];

        if (ni >= 0 && ni < n && nj < n && nj >= 0) {
          let neighbor = lists[ni][nj];

          if (neighbor >= current) {
            isPeak = false;
            break;
          }
        }
      }
      if (isPeak) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
