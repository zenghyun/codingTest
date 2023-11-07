function solution(k, score) {
  let stage = [];
  let answer = [];
  for (let i in score) {
    stage.push(score[i]);
    if (stage.length > k) {
      stage.sort((a, b) => a - b).shift();
    }
    answer.push(Math.min(...stage));
  }
  return answer;
}
