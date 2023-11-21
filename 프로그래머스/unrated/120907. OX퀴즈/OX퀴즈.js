function solution(quiz) {
  let arr = [];
  let answer = [];
  quiz.forEach((idx) => {
    arr.push(idx.split("="));
  });

  for (let i of arr) {
    if (i[0].indexOf("+") !== -1) {
      let [num1, num2] = i[0].split("+");
      let plus = (+num1) + (+num2);
      plus === +i[1] ? answer.push("O") : answer.push("X");
    } else {
      let [num1,x,num3]= i[0].trim().split(' ');
      let minus = (+num1) - (+num3);
      minus === +i[1] ? answer.push("O") : answer.push("X");
    }
  }
  return answer;
}