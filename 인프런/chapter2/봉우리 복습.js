function solution(lists) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let n = lists.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let current = lists[i][j];
      let isPeak = true;

      for (let k = 0; k < 4; k++) {
        let kx = i + dx[k];
        let ky = j + dy[k];

        if (kx >= 0 && kx < n && ky >= 0 && ky < n) {
          let neighbor = lists[kx][ky];
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
