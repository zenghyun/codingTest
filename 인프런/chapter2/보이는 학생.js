function solution(num) {
  let students = Array.from({ length: num }, () => {
    let student = Math.floor(Math.random() * 50) + 130;
    return student;
  });

  let answer = 1;
  let MaxHeight = students[0];

  for (let i = 0; i < students.length - 1; i++) {
    if (students[i + 1] > MaxHeight) {
      MaxHeight = students[i + 1];
      answer++;
    }
  }

  return [answer, students];
}

console.log(solution(8));
