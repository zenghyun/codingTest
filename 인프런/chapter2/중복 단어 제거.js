function solution(list) {
  // 풀이 1
  //   let answer = new Set(list);
  // 풀이 2
  let answer = [];

  for (let x of list) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }

  return [...answer];
}

console.log(solution(["good", "time", "good", "time", "student"]));
