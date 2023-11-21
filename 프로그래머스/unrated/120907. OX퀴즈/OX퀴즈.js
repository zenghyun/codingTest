function solution(quiz) {
  var answer = quiz.map((item) => {
    const [left, right] = item.split("=");
    return eval(left) == right ? "O" : "X";
  });
  return answer;
}