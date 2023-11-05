function solution(num_list, n) {
  let answer = [];
  let length = num_list.length;
  for (let i = 0; i < length / n; i++) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}