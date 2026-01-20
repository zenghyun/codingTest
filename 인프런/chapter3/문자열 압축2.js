function solution(text) {
  let answer = "";
  let cnt = 1;
  let s = text;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
}
console.log(solution("KKHSSSSSSSE"));
