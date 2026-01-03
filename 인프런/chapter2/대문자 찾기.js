function solution(text) {
  console.log("a".charCodeAt());
  let answer = 0;

  // 풀이 1 a의 아스키 코드가 97이기 때문에 97보다 작으면 대문자
  // 대문자면 65와 90 사이의 값임
  //   for (let x of text) {
  //     if (x.charCodeAt() < 97) {
  //       answer++;
  //     }
  //   }

  for (let x of text) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("KoreaTimeGood"));
