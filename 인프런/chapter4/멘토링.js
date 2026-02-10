function solution(tests) {
  const result = [];
  const M = tests.length;
  const N = tests[0].length;

  // 테스트별 등수 맵
  const rankMaps = Array.from({ length: M }, () => ({}));

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const student = tests[i][j];
      rankMaps[i][student] = j;
    }
  }
  console.log(rankMaps);
  // 멘토-멘티 검사
  for (let mentor = 1; mentor <= N; mentor++) {
    for (let mentee = 1; mentee <= N; mentee++) {
      if (mentor === mentee) continue;

      let isValid = true;

      for (let i = 0; i < M; i++) {
        if (rankMaps[i][mentor] > rankMaps[i][mentee]) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        result.push(`(${mentor},${mentee})`);
      }
    }
  }

  return result.join(", ");
}

// (3, 1) (3, 2) (4, 2)
console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
