function solution(my_string, num1, num2) {
  let answer = [...my_string];
  [answer[num2], answer[num1]] = [answer[num1], answer[num2]];
  return answer.join("");
}
