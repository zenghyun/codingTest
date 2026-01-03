function solution(list) {
  let answer = list[0];
  let maxLength = Number.MIN_SAFE_INTEGER;
  for (let x of list) {
    if (x !== list[0] && maxLength < x.length) {
      maxLength = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
