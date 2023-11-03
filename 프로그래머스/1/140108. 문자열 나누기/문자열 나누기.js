function solution(s) {
  let currentStr;
  let currentScore = 0,
    diffScore = 0;
  let answer = 0;
  [...s].forEach((str) => {
    if (currentStr === undefined) {
      currentScore++;
      currentStr = str;
    } else if (currentStr === str) {
      currentScore++;
    } else {
      diffScore++;
    }

    if (currentScore === diffScore) {
      answer++;
      currentScore = 0;
      diffScore = 0;
      currentStr = undefined;
    }
  });
  if (currentScore !== 0 || diffScore !== 0) {
    answer++;
  }

  return answer;
}