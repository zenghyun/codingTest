function solution(list) {
  let answer = [];
  let m = list.length;
  let n = list[0].length;
  let strMap = Array.from({ length: m }, () => ({}));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let student = list[i][j];
      strMap[i][student] = j;
    }
  }

  for (let mentor = 1; mentor <= n; mentor++) {
    for (let mentee = 1; mentee <= n; mentee++) {
      if (mentor === mentee) continue;

      let isValid = true;
      for (let i = 0; i < m; i++) {
        if (strMap[i][mentor] > strMap[i][mentee]) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        answer.push(`(${mentor}, ${mentee})`);
      }
    }
  }

  return answer;
}

// (3, 1) (3, 2) (4, 2)
console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
