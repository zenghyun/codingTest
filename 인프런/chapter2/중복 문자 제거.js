function solution(text) {
  // 풀이 1
  //   let answer = new Set(text);
  //   return [...answer].join("");
  // 풀이 2
  let answer = "";

  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) === i) {
      answer += text[i];
    }
  }

  return answer;
}

// 번외 문제
// text 가 주어졌을 때, 알파벳 k가 몇개 있는지?
function solution2(text) {
  let answer = 0;
  let pos = text.indexOf("k");

  while (pos !== -1) {
    answer++;
    pos = text.indexOf("k", pos + 1);
  }
  return answer;
}

console.log(solution("ksekkset"));
console.log(solution2("ksekkset"));
