// 풀이 1
function solution(day, list) {
  let num = 0;
  let lastNumber;
  list.forEach((number) => {
    lastNumber = Number(String(number).split("")[1]);
    if (lastNumber === day) {
      num += 1;
    }
  });
  return num;
}

// 풀이 2
function solution(day, arr) {
  let answer = 0;

  for (let x of arr) {
    if (x % 10 === day) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(7, [25, 23, 11, 47, 53, 17, 33]));
