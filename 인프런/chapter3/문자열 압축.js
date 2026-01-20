function solution(text) {
  let answer = [];
  let n = text.length;
  let re = 0;

  for (let i = 0; i < n; i++) {
    if (re === 0) {
      answer.push(text[i]);
      re += 1;
    } else if (text[i - 1] === text[i]) {
      re += 1;
    } else {
      if (re !== 1) {
        answer.push(String(re));
      }
      re = 0;
      answer.push(text[i]);
    }
  }

  return answer.join("");
}
// K2HS7E
console.log(solution("KVKHSSSSSSSE"));
