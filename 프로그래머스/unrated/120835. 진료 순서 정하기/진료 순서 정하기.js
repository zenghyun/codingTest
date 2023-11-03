function solution(emergency) {
  let answer = [];

  emergency.forEach((v) => {
    let cnt = 0;
    for (let i = 0; i < emergency.length; i++) {
      if (v <= emergency[i]) {
        cnt++;
      }
    }
    answer.push(cnt);
  });
  return answer;
}