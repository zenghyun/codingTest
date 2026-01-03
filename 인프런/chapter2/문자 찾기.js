function solution(text, alpabet) {
  let answer = 0;

  // 풀이 1
  //   for (let x of text) {
  //     if (x === alpabet) {
  //       answer += 1;
  //     }
  //   }

  // 풀이 2
  answer = text.split(alpabet).length - 1;

  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", "R"));
