function solution(text) {
  let answer = "";
  // 풀이 1
  //   return text.toUpperCase();

  // 풀이 2
  for (let x of text) {
    if (x.charCodeAt() > 90) {
      answer += x.toUpperCase();
    } else {
      answer += x;
    }
  }

  return answer;
}

console.log(solution("ItisTimeToStudy"));
